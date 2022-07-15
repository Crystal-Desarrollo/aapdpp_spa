import styled from 'styled-components'
import { SectionStyled } from '../../Common/Section'

export const LibraryStyled = styled(SectionStyled)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    > :nth-child(2) {
        grid-column: span 3;
    }
    > :nth-child(3) {
        grid-column: span 4;
    }

    button {
        cursor: pointer;
    }

    .picture {
        width: 100%;
        display: flex;
        justify-content: center;

        background-color: #ddd;

        .file-uploader {
            width: 100%;
            height: 100%;

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

    .uploaded-files {
        margin-bottom: 0.5rem;
    }

    .folders-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;

        li {
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
            }

            .folder-content {
                li {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 2rem;
                    margin-bottom: 0;
                    border-bottom: 1px #ccc solid;

                    background: #f2f2f2;

                    span {
                        display: flex;
                        align-items: center;

                        i {
                            margin-right: 0.5rem;
                            font-size: 1.2rem;
                        }
                    }
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
        }

        input {
            margin-right: 1rem;
        }
    }
`
