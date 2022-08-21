import moment from 'moment'

import { H2 } from '../../Common/Texts'
import { FullViewStyled } from './styles'
import { FaCalendarDay } from 'react-icons/fa'
import { Card } from '../../Common/Card'

import DEFAULT_IMAGE from '../../../asssets/img/default_image.webp'
export const FullView = props => {
    const { created_at, body, description, title, cover } = props
    return (
        <FullViewStyled>
            <img
                src={cover?.path || DEFAULT_IMAGE}
                alt="Imagen ilustrativa de la noticia"
            />
            <section>
                <Card>
                    <span>
                        <i>
                            <FaCalendarDay />
                        </i>
                        {moment(created_at).format('DD-MM-YYYY')}
                    </span>
                    <H2>{title}</H2>

                    <p className="description">{description}</p>

                    <p dangerouslySetInnerHTML={{ __html: body }} />
                </Card>
            </section>
        </FullViewStyled>
    )
}
