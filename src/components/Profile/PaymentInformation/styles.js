import styled from 'styled-components'
import { Section } from '../../Common/Section'

export const PaymentInformationStyled = styled(Section)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;

    > :first-child {
        grid-column: span 2;
    }
`
