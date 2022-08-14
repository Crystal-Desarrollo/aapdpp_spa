import { useEffect } from 'react'
import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import { FileUploaderStyled, SelectedFileNameStyled } from './styles'
import { H4 } from '../../Common/Texts'

export const FileUploader = props => {
    const { onChange, pictureUrl, label, multiple = false, inputName } = props
    const [picturePreview, setPicturePreview] = useState(pictureUrl)
    const [files, setFiles] = useState([])

    useEffect(() => setPicturePreview(pictureUrl), [pictureUrl])

    const handleUploadPicture = e => {
        if (multiple) {
            const chosenFiles = Array.prototype.slice.call(e.target.files)
            onChange(prev => ({
                ...prev,
                [e.target.name]: chosenFiles
            }))
            setFiles(chosenFiles)
            return
        }

        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            onChange(prev => ({ ...prev, [inputName]: file }))
            setPicturePreview(reader.result)
        }
    }

    const renderSelectedFiles = () => {
        if (!multiple) return

        if (files.length === 0)
            return <p className="no-files">Aún no se agregaron archivos</p>

        return files.map((file, i) => (
            <SelectedFileNameStyled key={file.name}>
                <p>
                    <span>{i + 1}.</span>
                    {file.name}
                </p>
            </SelectedFileNameStyled>
        ))
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
                        value={pictureUrl || ''}
                        multiple={multiple}
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
