import styled from 'styled-components'

const H2Styled = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #142b4b;
    margin-bottom: 1rem;
`

const H3Styled = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    color: #1d3557;
    margin-bottom: 1rem;
`

const H4Styled = styled.h4`
    font-size: 1rem;
    font-weight: 500;
    color: #1d3557;
    margin-bottom: 0.75rem;
`
export const H2 = ({ text, children, ...rest }) => {
    return <H2Styled {...rest}>{children}</H2Styled>
}

export const H3 = ({ text, children, ...rest }) => {
    return <H3Styled {...rest}>{children}</H3Styled>
}

export const H4 = ({ text, children, ...rest }) => {
    return <H4Styled {...rest}>{children}</H4Styled>
}
