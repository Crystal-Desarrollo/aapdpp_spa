import { Hero } from '../../components/Hero/index.jsx'
import { About } from '../../components/About/index.jsx'
import { News } from '../../components/News/NewsList/index.jsx'
import { Links } from '../../components/Links/index.jsx'
import { Contact } from '../../components/Contact/index.jsx'
import { Estatuto } from '../../components/Estatuto/index.jsx'

export function Home() {
    return (
        <>
            <Hero
                imageAlt="Estudiante sentado con una notebook sobre las piernas"
                text="Asociación Argentina de Profesores de Derecho Procesal Penal"
            />
            <About />
            <News title="Noticias mas recientes" full={false} />
            <Links />
            <Estatuto />
            <Contact />
        </>
    )
}
