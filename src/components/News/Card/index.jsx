import { Link } from 'react-router-dom'
import { FaCalendarDay } from 'react-icons/fa'
import { CardStyled } from './styles.js'

export const Card = ({
    date,
    author,
    title,
    description,
    url = '',
    imageUrl
}) => {
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
                <img src={imageUrl} alt="Foto ilustrativa de la noticia" />
            </div>
            <h3>
                <Link to={`/noticia/${url}`}>{title}</Link>
            </h3>
            <p>
                {description} <br />
                <Link to={`/noticia/${url}`}>Seguir leyendo</Link>
            </p>
        </CardStyled>
    )
}
