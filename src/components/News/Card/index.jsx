import { FaCalendarDay } from 'react-icons/fa'
import { CardStyled } from './styles.js'

export const Card = ({ date, author, title, description }) => {
    return (
        <CardStyled>
            <div className="card-header">
                <span>
                    <i>
                        <FaCalendarDay />
                    </i>
                    {date}
                </span>
                <span>{author}</span>
            </div>
            <div className="img-container">
                <img src="https://picsum.photos/600/300" alt="" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </CardStyled>
    )
}
