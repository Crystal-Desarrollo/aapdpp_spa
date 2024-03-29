import { useState } from 'react'
import { FaFile, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FILE_DELETED } from '../../../../i18n/files'
import { removeFile } from '../../../../store/slices/librarySlice'
import { Confirm } from '../../../Common/modals/Confirm'
import { DocumentRowStyled } from './styles'
export const DocumentRow = ({ file, folderId }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleDeleteFile = () => {
        setOpen(false)
        dispatch(removeFile(file.id, folderId)).then(() =>
            toast.success(FILE_DELETED)
        )
    }

    return (
        <>
            <Confirm
                title="Eliminar"
                description="¿Seguro desea eliminar el archivo?"
                acceptText="Si, eliminar"
                onAccept={handleDeleteFile}
                onCancel={() => setOpen(false)}
                cancelText="Cancelar"
                shown={open}
            />
            <DocumentRowStyled key={file.id}>
                <span>
                    <i>
                        <FaFile />
                    </i>
                    <p className="name">{file.original_name}</p>
                </span>

                <button onClick={() => setOpen(true)}>
                    <i>
                        <FaTrash />
                    </i>
                </button>
            </DocumentRowStyled>
        </>
    )
}
