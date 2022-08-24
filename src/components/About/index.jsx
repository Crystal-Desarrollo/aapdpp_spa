import { H2 } from '../Common/Texts.jsx'
import { Goal } from './Goal/index.jsx'
import { Grid } from '../Common/Grid.jsx'
import { Section } from '../Common/Section.jsx'
import { PeopleCard } from '../PeopleCard/index.jsx'
import { useGetUsers } from '../../hooks/users/useGetUsers.js'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { Button } from '../Common/Inputs/Button.jsx'
import { Link } from 'react-router-dom'

const goals = [
    'Optimizar el proceso de enseñanza y aprendizaje del derecho procesal penal en todas las facultades de derecho de la República Argentina.',
    'Difundir e intercambiar los programas de estudio y las metodologías de evaluación de las distintas cátedras y comisiones de la materia en todas las universidades del país, así como la evolución que aquéllas vayan manifestando.',
    'Compartir y debatir acerca de los diferentes enfoques de la materia por parte de las diferentes facultades de derecho.',
    'Procurar la actualización permanente de los docentes en orden a la información imprescindible en materia bibliográfica, tanto argentina como extranjera.',
    'Mantener la organización periódica de encuentros de profesores en las distintas universidades del país, con la posibilidad de asistencia y aporte de alumnos.',
    'Participar en la propuesta de temas para los Congresos Nacionales de Derecho Penal y Derecho Procesal.'
]

export const About = ({ full }) => {
    const users = useGetUsers(full)
    const [adminUsers, setAdminUsers] = useState([])

    useEffect(() => {
        setAdminUsers(() =>
            users.filter(x => x.role?.name === 'admin').map(x => x.id)
        )
    }, [users])

    return (
        <>
            <Section>
                <H2>Autoridades de la asociación</H2>
                <Grid>
                    {users.map(
                        user =>
                            adminUsers.includes(user.id) && (
                                <PeopleCard
                                    key={user.id}
                                    profilePicture={user?.avatar?.path}
                                    name={user.name}
                                    joined={moment(user.created_at).format(
                                        'DD-MM-YYYY'
                                    )}
                                    isActive={user?.active}
                                />
                            )
                    )}
                </Grid>
            </Section>
            <Section>
                <H2>Listado de asociados</H2>
                <Grid>
                    {users.map(
                        user =>
                            !adminUsers.includes(user.id) && (
                                <PeopleCard
                                    key={user.id}
                                    profilePicture={user?.avatar?.path}
                                    name={user.name}
                                    joined={moment(user.created_at).format(
                                        'DD-MM-YYYY'
                                    )}
                                    isActive={user.active}
                                />
                            )
                    )}
                </Grid>
                {!full && (
                    <Button
                        as={Link}
                        to="/miembros"
                        style={{ alignSelf: 'center', marginTop: '1rem' }}
                    >
                        Ver todas los miembros
                    </Button>
                )}
            </Section>
            <Section id="nosotros">
                <H2>Nuestros objetivos</H2>
                <Grid>
                    {goals.map((goal, i) => (
                        <Goal text={goal} key={i} />
                    ))}
                </Grid>
            </Section>
        </>
    )
}
