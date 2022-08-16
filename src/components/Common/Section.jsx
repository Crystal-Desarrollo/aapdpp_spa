import styled from 'styled-components'

export const SectionStyled = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1rem;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;

    position: relative;

    @media screen and (max-width: 1200px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const Section = ({ children, ...rest }) => {
    return <SectionStyled {...rest}>{children}</SectionStyled>
}
