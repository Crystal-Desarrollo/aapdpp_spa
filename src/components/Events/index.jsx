import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { EventCard } from './EventCard'
import { useGetAll } from '../../hooks/events/useGetAll'
import { Loader } from '../Loader'

export const EventsList = () => {
    const { data, loading } = useGetAll()

    return (
        <Section>
            {loading && <Loader />}
            <H2>Eventos</H2>
            <Grid>
                {data?.length > 0 &&
                    data.map(event => <EventCard event={event} />)}
            </Grid>
        </Section>
    )
}
