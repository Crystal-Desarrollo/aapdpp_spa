import { HashLink } from 'react-router-hash-link'
import { StyledMenu } from './styles'
export const Menu = props => {
    const { items = [] } = props

    return (
        <StyledMenu>
            {items.map(item => {
                return (
                    <li key={item.text}>
                        <HashLink to={item.url}>{item.text}</HashLink>
                    </li>
                )
            })}
        </StyledMenu>
    )
}
