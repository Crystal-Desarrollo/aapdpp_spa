import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FileCardStyled = styled(Link)`
    min-width: 300px;
    width: 300px;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1rem;

    ${({ type }) => type === 'pdf' && 'background-color: #ff5975;'}
    ${({ type }) => type === 'word' && 'background-color: #3d99f5;'}
    ${({ type }) => type === 'pp' && 'background-color: #ff8000;'}
    ${({ type }) => type === 'excel' && 'background-color: #00cc44;'}

    color: #fff;
    text-decoration: none;
    font-weight: 500;
`
