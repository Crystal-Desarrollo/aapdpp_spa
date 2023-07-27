import { Hero } from '../../components/Hero'
import { Members } from '../../components/About'
import { News } from '../../components/News/NewsList'
import { LinksList } from '../../components/Links'
import { Contact } from '../../components/Contact'
import { Estatuto } from '../../components/Estatuto'

import HeroImage from '../../asssets/img/hero_image.webp'

export function Home() {
    return (
        <>
            <Hero
                image={HeroImage}
                imageAlt="Estudiante sentado con una notebook sobre las piernas"
                text="Asociación Argentina de Profesores de Derecho Procesal Penal"
            />
            <Members full={false} />
            <News title="Noticias mas recientes" full={false} />
            <LinksList full={false} />
            <Estatuto />
            <Contact />
        </>
    )
}
