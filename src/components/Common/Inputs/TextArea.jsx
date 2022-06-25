import styled from 'styled-components'

const FieldStyled = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;
    background-color: inherit;

    label {
        font-size: 1rem;
        font-weight: 500;
        color: #142b4b;
        background-color: inherit;
        padding: 0.2rem;
        cursor: text;

        position: absolute;
        left: 1rem;
        bottom: 50%;
        transform: translateY(50%);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
        font-size: 0.875rem;
        top: 0;
        transform: translateY(-51%);
    }

    input {
        background-color: transparent;
        border: 1px solid #142b4b;
        border-radius: 0.2rem;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

        font-size: 1rem;
        padding: 0.8rem 1rem;

        :focus {
            outline: none;
        }
    }
`

export const TextArea = props => {
    const { name, id, labelText, placeholder = ' ', ...rest } = props

    return (
        <FieldStyled>
            <textarea name={name} id={id} placeholder={placeholder} {...rest} />
            <label htmlFor={id}>{labelText}</label>
        </FieldStyled>
    )
}
