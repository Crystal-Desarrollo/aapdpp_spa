import { GoalStyled } from './styles'
import { FaAward } from 'react-icons/fa'

export const Goal = ({ text }) => {
    return (
        <GoalStyled>
            <i>
                <FaAward />
            </i>
            <p>{text}</p>
        </GoalStyled>
    )
}
