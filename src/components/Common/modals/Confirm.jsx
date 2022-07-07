import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { BoxStyled, Box } from '../Box'
import { Button } from '../Inputs/Button'
import { H4 } from '../Texts'

const ConfirmStyled = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);

    display: grid;
    place-items: center;

    ${BoxStyled} {
        padding: 1rem;

        p {
            margin-bottom: 1rem;
            font-size: 0.875rem;
        }

        .buttons {
            display: flex;
            justify-content: flex-end;

            > :first-child {
                margin-right: 0.5rem;
            }
        }
    }
`

export const Confirm = ({
    shown,
    title,
    description,
    cancelText,
    acceptText,
    onCancel,
    onAccept
}) => {
    const domNode = document.getElementById('modal-container')

    if (!shown) return null

    return ReactDOM.createPortal(
        <ConfirmStyled>
            <Box>
                <H4>{title}</H4>
                <p>{description}</p>
                <div className="buttons">
                    <Button dense onClick={onCancel}>
                        {cancelText}
                    </Button>
                    <Button dense onClick={onAccept}>
                        {acceptText}
                    </Button>
                </div>
            </Box>
        </ConfirmStyled>,
        domNode
    )
}
