import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { NoContent } from '../Common/NoContent'
import { MyLink } from './Link'
import { useGetLinks } from '../../hooks/links/useGetLinks'
import { Button } from '../Common/Inputs/Button'
import { Link } from 'react-router-dom'

export const LinksList = ({ full }) => {
    const links = useGetLinks(full)

    return (
        <Section id="enlaces-de-interes">
            <H2>Enlaces de interés</H2>

            {links.length > 0 ? (
                <>
                    <Grid elementWidth="350px">
                        {links.map(link => (
                            <MyLink {...link} key={link.id} />
                        ))}
                    </Grid>
                    {!full && (
                        <Button
                            as={Link}
                            to="/links"
                            style={{ alignSelf: 'center', marginTop: '1rem' }}
                        >
                            Ver todos los links
                        </Button>
                    )}
                </>
            ) : (
                <NoContent />
            )}
        </Section>
    )
}
