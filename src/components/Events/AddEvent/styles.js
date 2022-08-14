import styled from 'styled-components'
import { CardStyled } from '../../Common/Card'

export const EventSectionStyled = styled.section`
    width: 100%;
    max-width: 1200px;

    margin: auto;
    display: flex;
    flex-direction: column;
`

export const EventFormStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
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

export const EventFilesStyled = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    > :nth-child(3) {
        grid-column: span 2;
    }

    textarea {
        height: 500px;
    }

    position: relative; */
`
