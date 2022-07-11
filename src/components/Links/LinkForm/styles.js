import styled from 'styled-components'
import { BoxStyled } from '../../Common/Box'

export const LinkFormStyled = styled.div`
    width: 100%;
    max-width: 800px;

    margin: auto;
    display: flex;
    flex-direction: column;
`
export const LinkCardStyled = styled(BoxStyled)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`
