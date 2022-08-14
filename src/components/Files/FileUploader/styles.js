import { CardStyled } from '../../Common/Card'
import styled from 'styled-components'

export const FileUploaderStyled = styled(CardStyled)`
    width: 100%;
    display: flex;
    flex-direction: column;

    img {
        object-fit: cover;
        width: 100%;
    }

    .file-uploader {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        i {
            margin-bottom: 1rem;
            font-size: 3rem;
        }

        cursor: pointer;
    }

    .selected-files {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;

        h4 {
            margin-top: 0.5rem;
        }

        .no-files {
            margin-top: 1rem;
            align-self: center;
        }
    }
`

export const SelectedFileNameStyled = styled.li`
    width: 100%;
    list-style: none;
    word-break: break-all;

    border-bottom: 1px solid #cccccc;
    margin-bottom: 0.5rem;

    p {
        span {
            color: #1d3557;
            font-size: 18px;
            font-weight: bold;
            padding-right: 0.5rem;
        }
        width: 90%;
    }
`
