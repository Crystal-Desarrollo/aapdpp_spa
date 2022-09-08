import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { EventCard } from './EventCard'
import { useGetEvents } from '../../hooks/events/useGetEvents'
import { Hero } from '../Hero'

import HeroImage from '../../asssets/img/hero_library.webp'
import { NoContent } from '../Common/NoContent'

export const EventsList = () => {
    const futureEvents = useGetEvents()
    const pastEvents = useGetEvents(false)

    return (
        <>
            <Hero
                image={HeroImage}
                imageAlt="imagen ilustrativa de un evento"
                text="Eventos"
            />
            <Section>
                <H2>Próximos eventos</H2>
                {futureEvents?.length > 0 ? (
                    <Grid>
                        {futureEvents?.map(event => (
                            <EventCard event={event} key={event.id} />
                        ))}
                    </Grid>
                ) : (
                    <NoContent />
                )}
                <br />
                <H2>Eventos pasados</H2>
                {pastEvents?.length > 0 ? (
                    <Grid>
                        {pastEvents?.map(event => (
                            <EventCard event={event} key={event.id} />
                        ))}
                    </Grid>
                ) : (
                    <NoContent />
                )}
            </Section>
        </>
    )
}
