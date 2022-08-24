import { Hero } from '../../components/Hero/index.jsx'
import { About } from '../../components/About/index.jsx'
import { News } from '../../components/News/NewsList/index.jsx'
import { LinksList } from '../../components/Links/index.jsx'
import { Contact } from '../../components/Contact/index.jsx'
import { Estatuto } from '../../components/Estatuto/index.jsx'

import HeroImage from '../../asssets/img/hero_image.webp'

export function Home() {
    return (
        <>
            <Hero
                image={HeroImage}
                imageAlt="Estudiante sentado con una notebook sobre las piernas"
                text="Asociación Argentina de Profesores de Derecho Procesal Penal"
            />
            <About full={false} />
            <News title="Noticias mas recientes" full={false} />
            <LinksList full={false} />
            <Estatuto />
            <Contact />
        </>
    )
}
