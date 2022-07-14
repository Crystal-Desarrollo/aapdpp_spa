import { Hero } from '../../components/Hero/index.jsx'
import { About } from '../../components/About/index.jsx'
import { News } from '../../components/News/NewsList/index.jsx'
import { Links } from '../../components/Links/index.jsx'
import { Contact } from '../../components/Contact/index.jsx'
import HeroImage from '../../asssets/img/hero_image.webp'
import {
    EventCard,
    EventInfo,
    FileCard,
    FileEXCEL,
    FilePDF,
    FilePP,
    FileWord
} from '../../components/EventCard/index.jsx'
import { Grid } from '../../components/Common/Grid.jsx'

export function Home() {
    return (
        <>
            <Hero
                imageHero={HeroImage}
                imageAlt="Estudiante sentado con una notebook sobre las piernas"
                text="Asociación Argentina de Profesores de Derecho Procesal Penal"
            />
            <About />
            <News title="Noticias mas recientes" full={false} />
            <Links />
            <Contact />
            <Grid>
                <EventCard
                    date="25/05/22"
                    hour="16:04"
                    ubication="Ledesma"
                    descriptionEvent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus soluta eos cupiditate nisi alias."
                />
                <EventCard
                    date="25/05/22"
                    hour="16:04"
                    ubication="Ledesma"
                    descriptionEvent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus soluta eos cupiditate nisi alias."
                />
                <EventCard
                    date="25/05/22"
                    hour="16:04"
                    ubication="Ledesma"
                    descriptionEvent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus soluta eos cupiditate nisi alias."
                />
            </Grid>
            <EventInfo
                date="25/05/22"
                hour="16:04"
                ubication="Ledesma"
                descriptionEvent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus soluta eos cupiditate nisi alias."
            />
            <FilePDF />
            <FileWord />
            <FilePP />
            <FileEXCEL />
        </>
    )
}
