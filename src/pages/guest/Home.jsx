import { Hero } from '../../components/Hero'
import { Members } from '../../components/About'
import { News } from '../../components/News/NewsList'
import { LinksList } from '../../components/Links'
import { Contact } from '../../components/Contact'
import { Estatuto } from '../../components/Estatuto'

import HeroImage from '../../asssets/img/hero_image.webp'
import { Section } from '../../components/Common/Section'
import { Grid } from '../../components/Common/Grid'
import { H2 } from '../../components/Common/Texts'
import { Goal } from '../../components/About/Goal'

const goals = [
    'Optimizar el proceso de enseñanza y aprendizaje del derecho procesal penal en todas las facultades de derecho de la República Argentina.',
    'Difundir e intercambiar los programas de estudio y las metodologías de evaluación de las distintas cátedras y comisiones de la materia en todas las universidades del país, así como la evolución que aquéllas vayan manifestando.',
    'Compartir y debatir acerca de los diferentes enfoques de la materia por parte de las diferentes facultades de derecho.',
    'Procurar la actualización permanente de los docentes en orden a la información imprescindible en materia bibliográfica, tanto argentina como extranjera.',
    'Mantener la organización periódica de encuentros de profesores en las distintas universidades del país, con la posibilidad de asistencia y aporte de alumnos.',
    'Participar en la propuesta de temas para los Congresos Nacionales de Derecho Penal y Derecho Procesal.'
]

export function Home() {
    return (
        <>
            <Hero
                image={HeroImage}
                imageAlt="Estudiante sentado con una notebook sobre las piernas"
                text="Asociación Argentina de Profesores de Derecho Procesal Penal"
            />
            <Section id="nosotros">
                <H2>Nuestros objetivos</H2>
                <Grid>
                    {goals.map((goal, i) => (
                        <Goal text={goal} key={i} />
                    ))}
                </Grid>
            </Section>
            <News title="Noticias mas recientes" full={false} />
            <LinksList full={false} />
            <Estatuto />
            <Members full={false} />
            <Contact />
        </>
    )
}
