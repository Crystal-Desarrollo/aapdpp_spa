import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { EventCard } from './EventCard'

export const EventsList = () => {
    return (
        <Section>
            <H2>Eventos</H2>
            <Grid>
                {[0, 1, 2, 3, 4, 5].map(event => (
                    <EventCard />
                ))}
            </Grid>
        </Section>
    )
}
