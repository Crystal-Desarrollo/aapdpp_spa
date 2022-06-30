import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { NoContent } from '../Common/NoContent'
import { Link } from './Link'
import { useGetAll } from '../../hooks/links/useGetAll'
import { Loader } from '../Loader/index.jsx'

export const Links = () => {
    const { loading, data: links = [] } = useGetAll()

    return (
        <Section id="enlaces-de-interes">
            <H2>Enlaces de interés</H2>

            {loading ? (
                <Loader backgroundEnabled={false} float={false} />
            ) : (
                <>
                    {links.length > 0 ? (
                        <Grid elementWidth="250px">
                            {links.map(link => (
                                <Link {...link} key={link.id} />
                            ))}
                        </Grid>
                    ) : (
                        <NoContent />
                    )}
                </>
            )}
        </Section>
    )
}
