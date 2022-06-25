import { useState, useEffect } from 'react'

import { Section } from '../Common/Section'
import { Grid } from '../Common/Grid.jsx'
import { H2 } from '../Common/Texts.jsx'
import { NoContent } from '../Common/NoContent.jsx'
import { Card } from './Card'

const testNews = [
    {
        title: 'New Title',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat ex et sagittis fringilla. Suspendisse vulputate nunc ac justo ultricies, a mollis sem congue. Vestibulum sollicitudin condimentum est, in rhoncus augue. Ut sit amet risus eget mauris blandit placerat consequat eget eros. Vivamus pellentesque vehicula leo, consequat dictum arcu ullamcorper et.',
        body: 'A body',
        date: '02/05/2022',
        author: 'Johnny Deep'
    },
    {
        title: 'New Title',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title',
        description: 'This is the description',
        body: 'A body'
    }
]
export const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        setNews(testNews)
    }, [])

    return (
        <Section>
            <H2>Noticias mas recientes</H2>
            {news.length > 0 ? (
                <Grid>
                    {news.map(article => (
                        <Card {...article} />
                    ))}
                </Grid>
            ) : (
                <NoContent />
            )}
        </Section>
    )
}
