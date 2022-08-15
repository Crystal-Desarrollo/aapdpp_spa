import { Link } from 'react-router-dom'
import moment from 'moment'
import { FiCalendar } from 'react-icons/fi'
import { CardStyled } from './styles.js'
import { Button } from '../../Common/Inputs/Button.jsx'

import DEFAULT_IMAGE from '../../../asssets/img/default_image.webp'
export const Card = props => {
    const { created_at, author, title, description, id, imageUrl } = props

    return (
        <Link to={`/noticias/${id}`}>
            <CardStyled>
                <div className="img-container">
                    <img
                        src={imageUrl || DEFAULT_IMAGE}
                        alt="Foto ilustrativa de la noticia"
                    />
                </div>
                <div className="card-information">
                    <div className="card-date-author">
                        <span className="card-date">
                            <FiCalendar />
                            {moment(created_at).format('DD-MM-YYYY')}
                        </span>
                        <span className="card-author">{author}</span>
                    </div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <Button
                        className="card-btn"
                        as={Link}
                        to={`/noticias/${id}`}
                    >
                        Seguir leyendo
                    </Button>
                </div>
            </CardStyled>
        </Link>
    )
}
