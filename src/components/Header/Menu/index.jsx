import { StyledMenu } from './styles'
export const Menu = props => {
    const { items = [] } = props

    return (
        <StyledMenu>
            {items.map(item => {
                return (
                    <li>
                        <a href={item.url}>{item.text}</a>
                    </li>
                )
            })}
        </StyledMenu>
    )
}
