import styled from 'styled-components'

const ButtonStyled = styled.button`
    width: max-content;
    padding: 0.875rem 2rem;

    background-color: #1d3557;
    color: #fff;
    border: 1px solid #1d3557;
    border-radius: 0.2rem;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    text-decoration: none;

    :hover {
        background-color: #142b4b;
        border-color: #142b4b;
    }

    :active {
        background-color: #082041;
        border-color: #082041;
    }
`

export const Button = props => {
    const { children, type = 'button', onClick, ...rest } = props

    return (
        <ButtonStyled type={type} onClick={onClick} {...rest}>
            {children}
        </ButtonStyled>
    )
}
