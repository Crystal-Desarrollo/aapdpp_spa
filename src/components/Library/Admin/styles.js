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

        background-color: #eee;

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
    }
`
