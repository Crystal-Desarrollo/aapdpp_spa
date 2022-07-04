import styled from 'styled-components'

const BoxStyled = styled.div`
    background-color: #f2f2f2;
    border-radius: 0.2rem;
    padding: 2rem;
    height: min-content;
    width: auto;

    position: relative;
    background-color: #fff;
`

export const Box = ({ children }) => {
    return <BoxStyled>{children}</BoxStyled>
}
