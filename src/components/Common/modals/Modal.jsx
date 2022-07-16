import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { H4 } from '../Texts'
import { BoxStyled, Box } from '../Box'

const ConfirmStyled = styled.div`
    z-index: 99999;
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
        width: max-content;
        max-width: 700px;
    }
`

export const Modal = ({ shown, children, title }) => {
    const domNode = document.getElementById('modal-container')

    if (!shown) return null

    return ReactDOM.createPortal(
        <ConfirmStyled>
            <Box>
                <H4>{title}</H4>

                {children}
            </Box>
        </ConfirmStyled>,
        domNode
    )
}
