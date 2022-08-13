import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { NoContent } from '../Common/NoContent'
import { Link } from './Link'
import { useGetLinks } from '../../hooks/links/useGetLinks'

export const Links = () => {
    const links = useGetLinks()

    return (
        <Section id="enlaces-de-interes">
            <H2>Enlaces de interés</H2>

            {links.length > 0 ? (
                <Grid elementWidth="250px">
                    {links.map(link => (
                        <Link {...link} key={link.id} />
                    ))}
                </Grid>
            ) : (
                <NoContent />
            )}
        </Section>
    )
}
