import { HeroStyled } from './styles'

import HeroImage from '../../asssets/img/hero_image.webp'
export const Hero = ({ imageAlt, text }) => {
    return (
        <HeroStyled>
            <img src={HeroImage} alt={imageAlt} />
            <div>
                <p>{text}</p>
            </div>
        </HeroStyled>
    )
}
