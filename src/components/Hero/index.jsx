import { HeroStyled } from './styles'

import HeroImage from '../../asssets/img/hero_image.webp'
export const Hero = () => {
    return (
        <HeroStyled>
            <img
                src={HeroImage}
                alt="Estudiante sentado con una notebook sobre las piernas"
            />
            <div>
                <p>
                    Asociación Argentina de Profesores de Derecho Procesal Penal
                </p>
            </div>
        </HeroStyled>
    )
}
