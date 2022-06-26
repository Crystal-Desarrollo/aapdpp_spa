import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ArticlesSectionStyled } from './styles.js'
import { Section } from '../Common/Section.jsx'
import { Grid } from '../Common/Grid.jsx'
import { H2 } from '../Common/Texts.jsx'
import { NoContent } from '../Common/NoContent.jsx'
import { Card } from './Card/index.jsx'
import { Button } from '../Common/Inputs/Button.jsx'

const testNews = [
    {
        title: 'New Title 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat ex et sagittis fringilla. Suspendisse vulputate nunc ac justo ultricies, a mollis sem congue. Vestibulum sollicitudin condimentum est, in rhoncus augue. Ut sit amet risus eget mauris blandit placerat consequat eget eros. Vivamus pellentesque vehicula leo, consequat dictum arcu ullamcorper et.',
        body: 'A body',
        date: '02/05/2022',
        author: 'Johnny Deep'
    },
    {
        title: 'New Title 2',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title 3',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title 4',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title 5',
        description: 'This is the description',
        body: 'A body'
    },
    {
        title: 'New Title 6',
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
export const News = ({ title, full }) => {
    const [news, setNews] = useState([])
    const [displayableNews, setDisplayableNews] = useState([])

    useEffect(() => {
        setNews(testNews)
    }, [])

    useEffect(() => {
        if (!full) {
            setDisplayableNews(news.splice(0, 6))
        } else {
            setDisplayableNews(news)
        }
    }, [news, full])

    return (
        <Section id="noticias">
            <H2>{title}</H2>
            {displayableNews.length > 0 ? (
                <ArticlesSectionStyled>
                    <Grid>
                        {displayableNews.map(article => (
                            <Card {...article} key={article.id} />
                        ))}
                    </Grid>
                    {!full && (
                        <Button as={Link} to="/noticias">
                            Ver todas nuestras noticias
                        </Button>
                    )}
                </ArticlesSectionStyled>
            ) : (
                <NoContent />
            )}
        </Section>
    )
}
