import styled from 'styled-components'
import { CardStyled } from '../../Common/Card'

export const RegisterFormStyled = styled.div`
    width: 100%;
    max-width: 800px;

    margin: auto;
    display: flex;
    flex-direction: column;
`
export const RegisterCardStyled = styled(CardStyled)`
    display: flex;
    flex-direction: column;

    > :not(:last-child) {
        margin-bottom: 1rem;
    }

    .first-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .picture {
            min-width: 160px;
            width: 160px;
            height: 160px;
            margin-right: 2rem;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #eee;
            border-radius: 50%;
            overflow: hidden;

            .file-uploader {
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

            img {
                object-fit: cover;
                max-height: 160px;
            }
        }

        .fields {
            width: 100%;
            background-color: #fff;
            grid-gap: 1rem;

            display: grid;

            > :nth-child(1) {
                grid-column: span 2;
            }

            > :nth-child(2) {
                grid-column: 1 / 2;
            }

            > :nth-child(3) {
                grid-column: 2 / 3;
            }

            > :nth-child(4) {
                grid-column: span 2;
            }
        }
    }

    position: relative;
`
