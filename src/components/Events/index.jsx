import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { EventCard } from './EventCard'
import { useGetEvents } from '../../hooks/events/useGetEvents'
import { Loader } from '../Loader'
import { useIsLoading } from '../../hooks/app/useIsLoading'

export const EventsList = () => {
    const events = useGetEvents()
    const isLoading = useIsLoading()

    return (
        <Section>
            {isLoading && <Loader />}
            <H2>Eventos</H2>
            <Grid>
                {events?.map(event => (
                    <EventCard event={event} />
                ))}
            </Grid>
        </Section>
    )
}
