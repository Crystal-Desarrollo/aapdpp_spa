import { HeroStyled } from './styles'

import HeroImage from '../../asssets/img/hero_image.webp'
export const Hero = ({imageHero, imageAlt, text}) => {
    return (
        <HeroStyled>
            <img src={imageHero} alt={imageAlt} />
            <div>
                <p>
                    {text}
                </p>
            </div>
        </HeroStyled>
    )
}
