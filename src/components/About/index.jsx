import { H2 } from '../Common/Texts.jsx'
import { Goal } from './Goal/index.jsx'
import { Grid } from '../Common/Grid.jsx'
import { Section } from '../Common/Section.jsx'

const goals = [
    'Optimizar el proceso de enseñanza y aprendizaje del derecho procesal penal en todas las facultades de derecho de la República Argentina.',
    'Difundir e intercambiar los programas de estudio y las metodologías de evaluación de las distintas cátedras y comisiones de la materia en todas las universidades del país, así como la evolución que aquéllas vayan manifestando.',
    'Compartir y debatir acerca de los diferentes enfoques de la materia por parte de las diferentes facultades de derecho.',
    'Procurar la actualización permanente de los docentes en orden a la información imprescindible en materia bibliográfica, tanto argentina como extranjera.',
    'Mantener la organización periódica de encuentros de profesores en las distintas universidades del país, con la posibilidad de asistencia y aporte de alumnos.',
    'Participar en la propuesta de temas para los Congresos Nacionales de Derecho Penal y Derecho Procesal.'
]

export const About = () => {
    return (
        <Section>
            <H2>Nuestros objetivos</H2>

            <Grid>
                {goals.map((goal, i) => (
                    <Goal text={goal} key={i} />
                ))}
            </Grid>
        </Section>
    )
}
