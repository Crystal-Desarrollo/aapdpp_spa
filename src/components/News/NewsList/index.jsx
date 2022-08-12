import { Link } from 'react-router-dom'
import { ArticlesSectionStyled } from './styles.js'
import { Section } from '../../Common/Section.jsx'
import { Grid } from '../../Common/Grid.jsx'
import { H2 } from '../../Common/Texts.jsx'
import { NoContent } from '../../Common/NoContent.jsx'
import { Card } from '../Card/index.jsx'
import { Button } from '../../Common/Inputs/Button.jsx'
import { Loader } from '../../Loader/index.jsx'
import { useGetArticles } from '../../../hooks/articles/useGetArticles'
import { useIsLoading } from '../../../hooks/app/useIsLoading'

export const News = ({ title, full }) => {
    const news = useGetArticles(full)
    const isLoading = useIsLoading()

    return (
        <Section id="noticias">
            <H2>{title}</H2>
            {isLoading ? (
                <Loader float={false} backgroundEnabled={false} />
            ) : (
                <>
                    {news.length > 0 ? (
                        <ArticlesSectionStyled>
                            <Grid>
                                {news.map(article => (
                                    <Card
                                        {...article}
                                        imageUrl={article?.cover?.path}
                                        key={article.id}
                                    />
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
                </>
            )}
        </Section>
    )
}
