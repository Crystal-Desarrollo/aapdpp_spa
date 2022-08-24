import styled from 'styled-components'
import { TYPES } from '.'
export const FileCardStyled = styled.a`
    min-width: 300px;
    width: 300px;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;

    ${({ type }) => type === TYPES.pdf && 'background-color: #ff5975;'}
    ${({ type }) => type === TYPES.word && 'background-color: #3d99f5;'}
    ${({ type }) => type === TYPES.powerpoint && 'background-color: #ff8000;'}
    ${({ type }) => type === TYPES.excel && 'background-color: #00cc44;'}
    ${({ type }) => type === TYPES.generic && 'background-color: #343434;'}

    color: #fff;
    text-decoration: none;
    font-weight: 500;

    i {
        font-size: 5rem;
        color: #fff;
    }

    svg {
        margin-bottom: 1rem;
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        text-align: center;
    }

    button {
        background-color: transparent;
        border: none;
    }
`

export const ImageCardStyled = styled.a`
    width: 300px;
    height: 200px;
    display: flex;
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
    }
`
