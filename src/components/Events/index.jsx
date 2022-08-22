import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { EventCard } from './EventCard'
import { useGetEvents } from '../../hooks/events/useGetEvents'
import { Hero } from '../Hero'

import HeroImage from '../../asssets/img/hero_library.webp'

export const EventsList = () => {
    const events = useGetEvents()

    return (
        <>
            <Hero
                image={HeroImage}
                imageAlt="imagen ilustrativa de un evento"
                text="Eventos"
            />
            <Section>
                <H2>Eventos</H2>
                <Grid>
                    {events?.map(event => (
                        <EventCard event={event} key={event.id} />
                    ))}
                </Grid>
            </Section>
        </>
    )
}
