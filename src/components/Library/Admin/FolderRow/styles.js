import styled from 'styled-components'

export const FolderRowStyled = styled.li`
    padding: 0.5rem;
    background-color: #ddd;

    :not(:last-child) {
        margin-bottom: 1rem;
    }

    .folder-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px #000 solid;
        padding: 0.5rem;

        button:not(:last-child) {
            margin-right: 0.5rem;
        }

        .folder-icon {
            margin-right: 1rem;
            font-size: 1.5rem;
        }

        input {
            margin-right: 1rem;
        }
    }

    button {
        border: none;
        background: none;

        i {
            font-size: 1rem;
        }
    }

    label {
        display: flex;
        align-items: center;
    }
`
