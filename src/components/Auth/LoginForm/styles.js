import styled from 'styled-components'
import { CardStyled } from '../../Common/Card'

export const LoginFormStyled = styled.div`
    width: 100%;
    max-width: 400px;

    margin: auto;
    display: flex;
    flex-direction: column;

    img {
        max-width: 150px;
        align-self: center;
        margin-bottom: 2rem;
    }
`
export const LoginCardStyled = styled(CardStyled)`
    > *:not(:last-child) {
        margin-bottom: 1rem;
    }

    .form-footer {
        display: flex;
        align-items: center;

        button {
            margin-right: 1rem;
        }
    }

    position: relative;
`
