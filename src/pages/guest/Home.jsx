import { Guest } from '../layouts/Guest.jsx'
import { Hero } from '../../components/Hero/index.jsx'
import { About } from '../../components/About/index.jsx'
import { News } from '../../components/News/NewsList/index.jsx'
import { Links } from '../../components/Links/index.jsx'
import { Contact } from '../../components/Contact/index.jsx'

export function Home() {
    return (
        <Guest>
            <Hero />
            <About />
            <News title="Noticias mas recientes" full={false} />
            <Links />
            <Contact />
        </Guest>
    )
}
