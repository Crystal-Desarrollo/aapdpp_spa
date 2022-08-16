import styled from 'styled-components'

export const CardStyled = styled.div`
    padding: 1rem;
    border-radius: 0.3rem;
    background-color: #fff;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover {
        ${({ hover }) =>
            hover
                ? 'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'
                : ''}
    }
`
export const Card = ({ hover = false, children }) => {
    return <CardStyled hover={hover}>{children}</CardStyled>
}
