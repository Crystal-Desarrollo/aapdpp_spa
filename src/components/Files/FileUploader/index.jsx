import { useEffect } from 'react'
import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import { FileUploaderStyled, SelectedFileNameStyled } from './styles'
import { H4 } from '../../Common/Texts'
import { toast } from 'react-toastify'
import { MAX_FILES_ALLOWED } from '../../../i18n/files'
import { useRef } from 'react'

export const FileUploader = props => {
    const {
        files,
        setFiles,
        pictureUrl,
        label,
        multiple = false,
        inputName
    } = props
    const [picturePreview, setPicturePreview] = useState(pictureUrl)
    const inputRef = useRef()

    useEffect(() => setPicturePreview(pictureUrl), [pictureUrl])
    useEffect(() => {
        if (files?.length === 0) {
            inputRef.current.value = null
        }
    }, [files])

    const handleUploadPicture = e => {
        if (e.target.files.length > 5) {
            toast.error(MAX_FILES_ALLOWED)
            return
        }

        if (multiple) {
            setFiles(e.target.files)
            return
        }

        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            setFiles(prev => ({ ...prev, [inputName]: file }))
            setPicturePreview(reader.result)
        }
    }

    const renderSelectedFiles = () => {
        if (!multiple) return <></>

        if (files) {
            const filesArray = Array.prototype.slice.call(files)

            if (filesArray?.length === 0)
                return <p className="no-files">Aún no se agregaron archivos</p>

            return filesArray.map((file, i) => (
                <SelectedFileNameStyled key={i}>
                    <p>
                        <span>{i + 1}.</span>
                        {file.name}
                    </p>
                </SelectedFileNameStyled>
            ))
        }

        return <></>
    }

    return (
        <FileUploaderStyled>
            {picturePreview ? (
                <img src={picturePreview} alt="" />
            ) : (
                <label className="file-uploader" htmlFor="file-uploader">
                    <i>
                        <FaUpload />
                    </i>
                    <p>{label}</p>
                    <input
                        type="file"
                        hidden
                        id="file-uploader"
                        name={inputName}
                        onChange={handleUploadPicture}
                        multiple={multiple}
                        ref={inputRef}
                        files={files}
                    />
                </label>
            )}

            <ul className="selected-files">
                {multiple && (
                    <>
                        <hr />
                        <H4>Archivos seleccionados</H4>
                    </>
                )}
                {renderSelectedFiles()}
            </ul>
        </FileUploaderStyled>
    )
}
