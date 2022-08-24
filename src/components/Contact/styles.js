import styled from 'styled-components'

export const FormStyled = styled.form`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;

    position: relative;

    > :nth-child(1) {
        grid-column: 1 / 3;
    }

    > :nth-child(2) {
        grid-column: 1 / 3;
        grid-row: 2;
    }

    > :nth-child(3) {
        grid-column: 1 / 3;
        grid-row: 3;
    }

    > :nth-child(4) {
        grid-column: 3 / 7;
        grid-row: span 3;
    }

    > :nth-child(5) {
        width: 100%;
    }
`
