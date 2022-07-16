import { useState } from 'react'
import { LibraryStyled } from './styles'
import { FaUpload } from 'react-icons/fa'
import { Box } from '../../Common/Box'
import { H3 } from '../../Common/Texts'
import { Button } from '../../Common/Inputs/Button'
import { Loader } from '../../Loader'
import { useGetAll } from '../../../hooks/library/useGetAll'
import { FolderRow } from './FolderRow'
import { Modal } from '../../Common/modals/Modal'
import { NewFolderForm } from './NewFolderForm'
export const Library = () => {
    const [data, setData] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const { data: folders, loading } = useGetAll()

    const onChange = e => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)

        setData(prev => ({
            ...prev,
            [e.target.name]: chosenFiles
        }))
    }

    const handleSubmit = () => {}

    return (
        <>
            {loading && <Loader />}
            <LibraryStyled>
                <Modal shown={modalOpen} title="Nueva carpeta">
                    <NewFolderForm
                        onCancel={() => setModalOpen(false)}
                        onCreate={() => setModalOpen(false)}
                    ></NewFolderForm>
                </Modal>
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
                              <p className="uploaded-files">
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
                            <FolderRow key={folder.id} folder={folder} />
                        ))}
                    </ul>
                </Box>
                <Button onClick={handleSubmit}>Subir</Button>
            </LibraryStyled>
        </>
    )
}
