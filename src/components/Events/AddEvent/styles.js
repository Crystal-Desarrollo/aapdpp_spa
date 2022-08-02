import styled from 'styled-components'
import { CardStyled } from '../../Common/Card'

export const EventFormStyled = styled.div`
    width: 100%;
    max-width: 800px;

    margin: auto;
    display: flex;
    flex-direction: column;
`
export const EventCardStyled = styled(CardStyled)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    > :nth-child(3) {
        grid-column: span 2;
    }

    textarea {
        height: 500px;
    }

    position: relative;
`
