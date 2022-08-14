import styled from 'styled-components'

export const BoxStyled = styled.div`
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 1rem;
    height: min-content;
    width: auto;

    position: relative;
    background-color: #fff;
    width: 100%;
`

export const Box = ({ children }) => {
    return <BoxStyled>{children}</BoxStyled>
}
