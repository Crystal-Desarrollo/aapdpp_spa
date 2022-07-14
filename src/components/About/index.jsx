import { H2 } from '../Common/Texts.jsx'
import { Goal } from './Goal/index.jsx'
import { Grid } from '../Common/Grid.jsx'
import { Section } from '../Common/Section.jsx'
import { PeopleCard } from '../PeopleCard/index.jsx'

const goals = [
    'Optimizar el proceso de enseñanza y aprendizaje del derecho procesal penal en todas las facultades de derecho de la República Argentina.',
    'Difundir e intercambiar los programas de estudio y las metodologías de evaluación de las distintas cátedras y comisiones de la materia en todas las universidades del país, así como la evolución que aquéllas vayan manifestando.',
    'Compartir y debatir acerca de los diferentes enfoques de la materia por parte de las diferentes facultades de derecho.',
    'Procurar la actualización permanente de los docentes en orden a la información imprescindible en materia bibliográfica, tanto argentina como extranjera.',
    'Mantener la organización periódica de encuentros de profesores en las distintas universidades del país, con la posibilidad de asistencia y aporte de alumnos.',
    'Participar en la propuesta de temas para los Congresos Nacionales de Derecho Penal y Derecho Procesal.'
]

const Picture =
    'https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg'

const Name = 'Nombre Apellidossssss'

const Joined = 'Se unio hace 3 dias'

export const About = () => {
    return (
        <Section id="nosotros">
            <H2>Autoridades de la asociación</H2>
            <Grid>
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
                <PeopleCard
                    profilePicture={Picture}
                    name={Name}
                    joined={Joined}
                    isActive
                />
            </Grid>

            <H2>Listado de asociados</H2>
            <Grid>
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
                <PeopleCard name={Name} joined={Joined} isActive={false} />
            </Grid>

            <H2>Nuestros objetivos</H2>
            <Grid>
                {goals.map((goal, i) => (
                    <Goal text={goal} key={i} />
                ))}
            </Grid>
        </Section>
    )
}
