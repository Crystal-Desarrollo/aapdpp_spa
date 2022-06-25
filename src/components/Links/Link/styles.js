import styled from 'styled-components'
import { CardStyled } from '../../Common/Card'

export const LinkStyled = styled(CardStyled)`
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    i {
        font-size: 2rem;
        margin-right: 1rem;
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        color: #142b4b;
    }
`
