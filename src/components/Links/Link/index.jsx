import { FaLink } from 'react-icons/fa'
import { LinkStyled } from './styles.js'

export const Link = ({ icon, text, url }) => {
    return (
        <LinkStyled as="a" hover href={url} target="_blank">
            <i>
                <FaLink />
            </i>
            <p>{text}</p>
        </LinkStyled>
    )
}
