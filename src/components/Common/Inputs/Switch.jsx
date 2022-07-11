import styled from 'styled-components'

const StyledSwitch = styled.div`
    display: flex;

    label {
        position: relative;
        display: flex;
        width: 3rem;
        height: 1.5rem;
        margin-right: 0.5rem;

        .disabled {
            cursor: default;
        }

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        span {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: all 0.4s;

            border-radius: 1rem;
        }

        span:before {
            position: absolute;
            content: '';
            height: 1rem;
            width: 1rem;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            background-color: white;
            transition: all 0.4s;
            border-radius: 50%;
        }

        input:checked + span {
            background-color: #1d3557;
        }

        input:focus + span {
            box-shadow: 0 0 1px #1d3557;
        }

        input:checked + span:before {
            transform: translate(130%, -50%);
        }

        input:disabled + span {
            background-color: #aaa;
        }
    }
`

export const Switch = ({
    value,
    onChange,
    labelText,
    id,
    name,
    disabled,
    className = '',
    ...rest
}) => {
    return (
        <StyledSwitch>
            <label
                htmlFor={id || name}
                className={`${disabled ? 'disabled' : ''} ${className}`}
            >
                <input
                    type="checkbox"
                    value={value}
                    onChange={onChange}
                    id={id || name}
                    name={name}
                    checked={value}
                    disabled={disabled}
                    {...rest}
                />
                <span></span>
            </label>
            <p>{labelText}</p>
        </StyledSwitch>
    )
}
