import { useState } from 'react'
import { LibraryStyled } from './styles'
import { FaUpload } from 'react-icons/fa'
import { Box } from '../../Common/Box'
import { H3 } from '../../Common/Texts'
import { Button } from '../../Common/Inputs/Button'
import { useGetLibrary } from '../../../hooks/library/useGetLibrary'
import { FolderRow } from './FolderRow'
import { Modal } from '../../Common/modals/Modal'
import { NewFolderForm } from './NewFolderForm'
import { useDispatch } from 'react-redux'
import { createFile } from '../../../store/slices/librarySlice'
import { toast } from 'react-toastify'
import { FILE_UPLOADED } from '../../../i18n/files'
import { SOMETHING_WENT_WRONG } from '../../../i18n/common'
export const Library = () => {
    const [data, setData] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
    const folders = useGetLibrary()
    const dispatch = useDispatch()

    const onChange = e => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)

        setData(prev => ({
            ...prev,
            [e.target.name]: chosenFiles
        }))
    }

    const handleSubmit = () => {
        if (!data.folder) {
            toast.error('Debe seleccionar una carpeta')
            return
        }

        if (!data.files || data.files?.length < 1) {
            toast.error('Debe subir al menos un archivo')
            return
        }

        const formData = new FormData()
        data.files?.forEach(file => formData.append('files[]', file))
        formData.append('folder', data.folder)

        dispatch(createFile(formData))
            .then(() => {
                setData({})
                toast.success(FILE_UPLOADED)
            })
            .catch(() => toast.error(SOMETHING_WENT_WRONG))
    }

    const handleSelectFolder = e => {
        setData(prev => ({
            ...prev,
            folder: e.target.value
        }))
    }

    return (
        <>
            <Modal shown={modalOpen} title="Nueva carpeta">
                <NewFolderForm
                    onCancel={() => setModalOpen(false)}
                    onCreate={() => setModalOpen(false)}
                ></NewFolderForm>
            </Modal>
            <LibraryStyled>
                <div className="picture">
                    <Box>
                        <H3>Elija los archivos</H3>

                        <label
                            className="file-uploader"
                            htmlFor="file-uploader"
                        >
                            <i>
                                <FaUpload />
                            </i>
                            <p>Agregar archivos</p>
                            <input
                                type="file"
                                hidden
                                id="file-uploader"
                                name="files"
                                value={data?.picture || ''}
                                onChange={onChange}
                                multiple
                            />
                        </label>
                    </Box>
                </div>
                <Box>
                    <H3>Archivos elegidos</H3>
                    {data?.files
                        ? data.files.map((file, i) => (
                              <p className="uploaded-files" key={file.name}>
                                  {i + 1}. {file.name?.split('\\').pop()}
                              </p>
                          ))
                        : 'Aún no agregó archivos'}
                </Box>
                <Box>
                    <div className="folders-title">
                        <H3>Elija la carpeta destino</H3>
                        <Button dense onClick={() => setModalOpen(true)}>
                            Nueva carpeta
                        </Button>
                    </div>
                    <ul>
                        {folders.map(folder => (
                            <FolderRow
                                key={folder.id}
                                folder={folder}
                                onSelect={handleSelectFolder}
                                checked={
                                    Number(data.folder) === Number(folder.id)
                                }
                            />
                        ))}
                    </ul>
                </Box>
                <Button onClick={handleSubmit}>Subir</Button>
            </LibraryStyled>
        </>
    )
}
