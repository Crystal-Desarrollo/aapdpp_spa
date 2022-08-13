import { HeroStyled } from './styles'

export const Hero = ({ image, imageAlt, text }) => {
    return (
        <HeroStyled>
            <img src={image} alt={imageAlt} />
            <div>
                <p>{text}</p>
            </div>
        </HeroStyled>
    )
}
