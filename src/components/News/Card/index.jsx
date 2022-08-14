import { Link } from 'react-router-dom'
import moment from 'moment'
import { FaCalendarDay } from 'react-icons/fa'
import { CardStyled } from './styles.js'

import DEFAULT_IMAGE from '../../../asssets/img/default_image.webp'
export const Card = props => {
    const { created_at, author, title, description, id, imageUrl } = props

    return (
        <CardStyled>
            <div className="card-header">
                <span>
                    <i>
                        <FaCalendarDay />
                    </i>
                    {moment(created_at).format('DD-MM-YYYY')}
                </span>
                <span>{author}</span>
            </div>
            <div className="img-container">
                <img
                    src={imageUrl || DEFAULT_IMAGE}
                    alt="Foto ilustrativa de la noticia"
                />
            </div>
            <h3>
                <Link to={`/noticias/${id}`}>{title}</Link>
            </h3>
            <p>
                {description} <br />
                <Link to={`/noticias/${id}`}>Seguir leyendo</Link>
            </p>
        </CardStyled>
    )
}
