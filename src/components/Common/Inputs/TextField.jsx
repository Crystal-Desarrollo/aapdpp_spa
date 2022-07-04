import styled from 'styled-components'

const FieldStyled = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;
    background-color: inherit;

    label {
        font-size: 1rem;
        font-weight: 500;
        color: #1d3557;
        background-color: inherit;
        padding: 0 0.2rem;
        cursor: text;

        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: absolute;
        left: 1rem;
    }

    input ~ label {
        top: 50%;
        transform: translateY(-50%);
    }

    textarea ~ label {
        top: 0;
        transform: translateY(50%);
    }

    input:focus ~ label,
    textarea:focus ~ label,
    input:not(:placeholder-shown) ~ label,
    textarea:not(:placeholder-shown) ~ label {
        font-size: 0.875rem;
        top: 0;
        left: 0.6rem;
        transform: translateY(-50%);
        font-weight: 600;
    }

    caption {
        font-size: 0.875rem;
        background-color: inherit;
        padding: 0 0.2rem;

        position: absolute;
        bottom: 0;
        right: 2rem;
        transform: translateY(40%);
        font-weight: 500;
    }

    textarea {
        resize: none;
        height: 100%;
    }

    input,
    textarea {
        background-color: transparent;
        border: 1px solid #1d3557;
        border-radius: 0.2rem;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

        font-size: 1rem;
        padding: 0.8rem 1rem;

        :focus,
        :active {
            outline: none;
        }

        &.error,
        &:invalid {
            border-color: red;

            ~ label,
            ~ caption {
                color: red;
            }
        }

        :disabled {
            border: none;
        }
    }
`

export const TextField = props => {
    const {
        type = 'text',
        name,
        id = name,
        labelText,
        placeholder = ' ',
        tag = 'input',
        error = '',
        className = '',
        ...rest
    } = props

    const isInvalid = error.length > 0
    const invalidClassName = isInvalid > 0 ? 'error' : ''

    return (
        <FieldStyled>
            {tag === 'input' && (
                <input
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    error={error}
                    className={`${className} ${invalidClassName}`}
                    {...rest}
                />
            )}
            {tag === 'textarea' && (
                <textarea
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    error={error}
                    className={`${className} ${invalidClassName}`}
                    {...rest}
                />
            )}
            <label htmlFor={id}>{labelText}</label>
            {isInvalid && <caption>{error}</caption>}
        </FieldStyled>
    )
}
