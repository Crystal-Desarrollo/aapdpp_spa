import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { EventCard } from './EventCard'
import { useGetEvents } from '../../hooks/events/useGetEvents'

export const EventsList = () => {
    const events = useGetEvents()

    return (
        <Section>
            <H2>Eventos</H2>
            <Grid>
                {events?.map(event => (
                    <EventCard event={event} kry={event.id} />
                ))}
            </Grid>
        </Section>
    )
}
