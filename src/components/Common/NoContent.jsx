import styled from 'styled-components'
import { FaSadTear } from 'react-icons/fa'

const StyledNoContent = styled.div`
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
        font-size: 18px;
        font-weight: 500;
    }

    i {
        font-size: 8rem;
        color: #1d3557;
    }
`

export const NoContent = () => {
    return (
        <StyledNoContent>
            <p>Aún no hay nada aquí</p>
            <i>
                <FaSadTear />
            </i>
        </StyledNoContent>
    )
}
