import {
    EventCardStyled,
    EventFilesStyled,
    EventSectionStyled,
    EventFormStyled
} from './styles'
import { H2, H3 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { useDispatch } from 'react-redux'
import { create, edit } from '../../../store/slices/eventsSlice'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EVENT_ADDED, EVENT_MODIFIED } from '../../../i18n/events'
import { useGetEvent } from '../../../hooks/events/useGetEvent'
import { FileUploader } from '../../Files/FileUploader'
import { Grid } from '../../Common/Grid'
import { FileCard, mapExtensionToType } from '../../Files'
import { getFileExtension } from '../../../utils/files'
import { SOMETHING_WENT_WRONG } from '../../../i18n/common'
import { useState } from 'react'
import { TextEditor } from '../../Common/Inputs/TextEditor'

export const EventForm = () => {
    const { id } = useParams()
    const [data, setData] = useGetEvent(id)
    const [filesToUpload, setFilesToUpload] = useState('')
    const dispatch = useDispatch()

    const onChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        const formData = makeFormData()

        if (!id) {
            dispatch(create(formData))
                .then(() => setData({}))
                .then(() => {
                    setData({})
                    setFilesToUpload(null)
                    toast.success(EVENT_ADDED)
                })
                .catch(() => toast.error(SOMETHING_WENT_WRONG))
        } else {
            dispatch(edit(formData, data.id))
                .then(res => {
                    setData(prev => ({
                        ...prev,
                        files: res.files
                    }))
                    setFilesToUpload(null)
                    toast.success(EVENT_MODIFIED)
                })
                .catch(() => toast.error(SOMETHING_WENT_WRONG))
        }
    }

    const makeFormData = () => {
        const formData = new FormData()
        const filesArray = Array.prototype.slice.call(filesToUpload)
        filesArray?.forEach(file => {
            if (!file.id) {
                formData.append('files[]', file)
            }
        })
        Object.entries(data).forEach(([name, value]) => {
            if (name !== 'files') {
                formData.append(name, value)
            }
        })
        return formData
    }

    const renderEventFiles = () => {
        return (
            <Grid>
                {data?.files?.length > 0 ? (
                    data.files.map(file => {
                        return (
                            <FileCard
                                key={file.id}
                                type={mapExtensionToType(
                                    getFileExtension(file.name)
                                )}
                                downloadName={file.original_name}
                                downloadUrl={file.path}
                            />
                        )
                    })
                ) : (
                    <p>Este evento aun no tiene archivos</p>
                )}
            </Grid>
        )
    }

    return (
        <EventSectionStyled>
            <H2> {id ? 'Editar Evento' : 'Agregar evento'}</H2>
            <EventFormStyled>
                <EventCardStyled>
                    <TextField
                        name="location"
                        labelText="Lugar"
                        onChange={onChange}
                        value={data?.location}
                    />
                    <TextField
                        type="datetime-local"
                        name="date"
                        labelText="Fecha y hora"
                        onChange={onChange}
                        value={data?.date}
                    />
                    <TextEditor
                        name="description"
                        labelText="Descripción"
                        onChange={onChange}
                        value={data?.description}
                    />
                </EventCardStyled>
                <div>
                    <H3>Agregue archivos e imágenes</H3>
                    <FileUploader
                        label="Click para agregar archivos"
                        multiple={true}
                        files={filesToUpload}
                        setFiles={setFilesToUpload}
                        inputName="files"
                    />
                </div>
                <Button onClick={onSubmit}>Guardar</Button>
                <EventFilesStyled>
                    <H3>Biblioteca del evento</H3>
                    {renderEventFiles()}
                </EventFilesStyled>
            </EventFormStyled>
        </EventSectionStyled>
    )
}
