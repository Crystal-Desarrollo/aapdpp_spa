import { TextField } from '../../../Common/Inputs/TextField'
import { Button } from '../../../Common/Inputs/Button'
import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {
    createFolder,
    updateFolder
} from '../../../../store/slices/librarySlice'

const FormStyled = styled.div`
    .buttons {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;

        > :first-child {
            margin-right: 1rem;
        }
    }
`

export const NewFolderForm = ({ onCreate, onCancel, folder }) => {
    const [folderName, setFolderName] = useState(() =>
        folder ? folder.name : ''
    )
    const dispatch = useDispatch()

    const handleCreateNewFolder = () => {
        onCreate && onCreate()

        if (folder) {
            dispatch(updateFolder({ name: folderName }, folder.id))
        } else {
            dispatch(createFolder({ name: folderName }))
        }
    }

    return (
        <FormStyled>
            <TextField
                name="name"
                id="folder-name"
                value={folderName}
                labelText="Nombre"
                onChange={e => setFolderName(e.target.value)}
            />
            <div className="buttons">
                <Button dense onClick={onCancel}>
                    Cancelar
                </Button>
                <Button dense onClick={handleCreateNewFolder}>
                    Guardar
                </Button>
            </div>
        </FormStyled>
    )
}
