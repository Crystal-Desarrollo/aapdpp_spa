import { Section } from '../Common/Section'
import { H2 } from '../Common/Texts'
import { Grid } from '../Common/Grid'
import { NoContent } from '../Common/NoContent'
import { Link } from './Link'
import { useEffect, useState } from 'react'

const testLinks = [
    {
        icon: 'faLink',
        text: 'This is a test',
        url: 'https://youtube.com'
    },
    {
        icon: 'faLink',
        text: 'This is a test',
        url: 'https://youtube.com'
    },
    {
        icon: 'faLink',
        text: 'This is a test',
        url: 'https://youtube.com'
    },
    {
        icon: 'faLink',
        text: 'This is a test',
        url: 'https://youtube.com'
    },
    {
        icon: 'faLink',
        text: 'This is a test',
        url: 'https://youtube.com'
    },
    {
        icon: 'faLink',
        text: 'This is a test',
        url: 'https://youtube.com'
    },
    {
        icon: 'faLink',
        text: 'This is a test',
        url: 'https://youtube.com'
    }
]

export const Links = () => {
    const [links, setLinks] = useState([])

    useEffect(() => {
        setLinks(testLinks)
    }, [])

    return (
        <Section>
            <H2>Enlaces de interés</H2>

            {links.length > 0 ? (
                <Grid elementWidth="250px">
                    {links.map(link => (
                        <Link {...link} />
                    ))}
                </Grid>
            ) : (
                <NoContent />
            )}
        </Section>
    )
}
