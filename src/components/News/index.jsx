import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ArticlesSectionStyled } from './styles.js'
import { Section } from '../Common/Section.jsx'
import { Grid } from '../Common/Grid.jsx'
import { H2 } from '../Common/Texts.jsx'
import { NoContent } from '../Common/NoContent.jsx'
import { Card } from './Card/index.jsx'
import { Button } from '../Common/Inputs/Button.jsx'
import { useGetAll } from '../../hooks/articles/useGetAll.js'

export const News = ({ title, full }) => {
    const news = useGetAll()
    const [displayableNews, setDisplayableNews] = useState([])

    useEffect(() => {
        if (!full && news.length > 6) {
            setDisplayableNews(news.slice(0, 6))
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
