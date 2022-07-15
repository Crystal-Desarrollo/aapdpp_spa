import { useState } from 'react'
import { LibraryStyled } from './styles'
import { FaUpload } from 'react-icons/fa'
import { Box } from '../../Common/Box'
import { H3 } from '../../Common/Texts'
import { Button } from '../../Common/Inputs/Button'
import { useDispatch } from 'react-redux'
import { Loader } from '../../Loader'
import { useGetAll } from '../../../hooks/library/useGetAll'
import { FaTrash, FaPen, FaFile, FaFolder } from 'react-icons/fa'
import { removeFile, removeFolder } from '../../../store/slices/librarySlice'
export const Library = () => {
    const [data, setData] = useState()
    const dispatch = useDispatch()
    const { data: folders, loading } = useGetAll()

    const onChange = e => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)

        setData(prev => ({
            ...prev,
            [e.target.name]: chosenFiles
        }))
    }

    const handleSubmit = () => {}

    const handleDeleteFolder = id => {
        dispatch(removeFolder(id))
    }

    const handleDeleteFile = (fileId, folderId) => {
        dispatch(removeFile(fileId, folderId))
    }

    return (
        <LibraryStyled>
            {loading && <Loader />}
            <div className="picture">
                <Box>
                    <H3>Elija los archivos</H3>

                    <label className="file-uploader" htmlFor="file-uploader">
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
                          <p className="uploaded-files">
                              {i + 1}. {file.name?.split('\\').pop()}
                          </p>
                      ))
                    : 'Aún no agregó archivos'}
            </Box>
            <Box>
                <div className="folders-title">
                    <H3>Elija la carpeta destino</H3>
                    <Button dense>Nueva carpeta</Button>
                </div>
                <ul className="folder">
                    {folders.map(folder => (
                        <li key={folder.id}>
                            <div className="folder-name">
                                <label htmlFor={`folder_${folder.id}`}>
                                    <i className="folder-icon">
                                        <FaFolder />
                                    </i>
                                    <input
                                        id={`folder_${folder.id}`}
                                        type="radio"
                                        name="folder"
                                        value={folder.id}
                                    />

                                    {folder.name}
                                </label>

                                <div>
                                    <button onClick={() => {}}>
                                        <i>
                                            <FaPen />
                                        </i>
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteFolder(folder.id)
                                        }
                                    >
                                        <i>
                                            <FaTrash />
                                        </i>
                                    </button>
                                </div>
                            </div>
                            {folder?.files?.length > 0 && (
                                <ul className="folder-content">
                                    {folder.files.map(file => (
                                        <li key={file.id}>
                                            <span>
                                                <i>
                                                    <FaFile />
                                                </i>
                                                <p>{file.name}</p>
                                            </span>

                                            <button
                                                onClick={() =>
                                                    handleDeleteFile(
                                                        file.id,
                                                        folder.id
                                                    )
                                                }
                                            >
                                                <i>
                                                    <FaTrash />
                                                </i>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </Box>
            <Button onClick={handleSubmit}>Subir</Button>
        </LibraryStyled>
    )
}
