import { FaPen, FaTrash, FaFolder } from 'react-icons/fa'
import { DocumentRow } from '../DocumentRow'
import { removeFolder } from '../../../../store/slices/librarySlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Confirm } from '../../../Common/modals/Confirm'
import { FolderRowStyled } from './styles'
import { NewFolderForm } from '../NewFolderForm'
import { Modal } from '../../../Common/modals/Modal'

export const FolderRow = ({ folder, onSelect, checked }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)

    const handleDeleteFolder = () => {
        setOpen(false)
        dispatch(removeFolder(folder.id))
    }

    return (
        <FolderRowStyled key={folder.id}>
            <Modal shown={editOpen} title="Modificar carpeta">
                <NewFolderForm
                    onCancel={() => setEditOpen(false)}
                    onCreate={() => setEditOpen(false)}
                    folder={folder}
                />
            </Modal>
            <Confirm
                shown={open}
                title="Eliminar"
                description="Se eliminará la carpeta y todos sus archivos. ¿Desea continuar?"
                onAccept={handleDeleteFolder}
                onCancel={() => setOpen(false)}
                acceptText="Si, eliminar"
                cancelText="Cancelar"
            />
            <div className="folder-name">
                <label htmlFor={`folder_${folder.id}`}>
                    <input
                        id={`folder_${folder.id}`}
                        type="radio"
                        name="folder"
                        value={folder.id}
                        onChange={onSelect}
                        checked={checked}
                    />
                    <i className="folder-icon">
                        <FaFolder />
                    </i>
                    <p className="name">{folder.name}</p>
                </label>

                <div>
                    <button onClick={() => setEditOpen(true)}>
                        <i>
                            <FaPen />
                        </i>
                    </button>
                    <button onClick={() => setOpen(true)}>
                        <i>
                            <FaTrash />
                        </i>
                    </button>
                </div>
            </div>
            {folder?.files?.length > 0 && (
                <ul className="folder-content">
                    {folder.files.map(file => (
                        <DocumentRow
                            key={file.name}
                            file={file}
                            folderId={folder.id}
                        />
                    ))}
                </ul>
            )}
        </FolderRowStyled>
    )
}
