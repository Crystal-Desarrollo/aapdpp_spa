import { Link } from 'react-router-dom'
import { Section } from '../../Common/Section.jsx'
import { Grid } from '../../Common/Grid.jsx'
import { H2 } from '../../Common/Texts.jsx'
import { NoContent } from '../../Common/NoContent.jsx'
import { Card } from '../Card/index.jsx'
import { Button } from '../../Common/Inputs/Button.jsx'
import { useGetArticles } from '../../../hooks/articles/useGetArticles'

export const News = ({ title, full }) => {
    const news = useGetArticles(full)

    return (
        <Section id="noticias">
            <H2>{title}</H2>

            {news.length > 0 ? (
                <>
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
                        <Button
                            as={Link}
                            to="/noticias"
                            style={{ alignSelf: 'center', marginTop: '1rem' }}
                        >
                            Ver todas nuestras noticias
                        </Button>
                    )}
                </>
            ) : (
                <NoContent />
            )}
        </Section>
    )
}
