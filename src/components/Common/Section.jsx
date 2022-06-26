import styled from 'styled-components'

const SectionStyled = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export const Section = ({ children, ...rest }) => {
    return <SectionStyled {...rest}>{children}</SectionStyled>
}
