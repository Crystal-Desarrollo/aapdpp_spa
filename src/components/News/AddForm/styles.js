import styled from 'styled-components'
import { CardStyled } from '../../Common/Card'

export const NewsFormStyled = styled.div`
    width: 100%;
    max-width: 800px;

    margin: auto;
    display: flex;
    flex-direction: column;
`
export const NewsCardStyled = styled(CardStyled)`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .picture {
        width: 100%;
        height: 200px;

        display: flex;

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
    }

    > :not(:last-child) {
        margin-bottom: 1rem;
    }

    textarea {
        height: 500px;
    }

    position: relative;
`
