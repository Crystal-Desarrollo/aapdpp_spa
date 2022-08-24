import { FaLink } from 'react-icons/fa'
import { LinkStyled } from './styles.js'

export const MyLink = ({ icon, visible_text, url }) => {
    return (
        <LinkStyled as="a" hover href={url} target="_blank">
            <i>
                <FaLink />
            </i>
            <p>{visible_text}</p>
        </LinkStyled>
    )
}
