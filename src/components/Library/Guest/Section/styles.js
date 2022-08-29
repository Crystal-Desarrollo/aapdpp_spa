import styled from 'styled-components'
import { GridStyled } from '../../../Common/Grid'

export const NewGrid = styled(GridStyled)`
    height: ${props => props.height || 'auto'};
    overflow: hidden;
`

export const LibraryTittle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
