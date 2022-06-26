import styled from 'styled-components'

const MessageLabelStyled = styled.p`
    display: flex;
    align-items: center;

    &.error {
        color: red;
    }

    &.success {
        color: darkgreen;
    }
`

export const MessageLabel = ({ text, status, className, ...rest }) => {
    return (
        <MessageLabelStyled className={`${className} ${status}`} {...rest}>
            {text}
        </MessageLabelStyled>
    )
}
