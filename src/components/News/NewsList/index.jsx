import { Link } from 'react-router-dom'

import { ArticlesSectionStyled } from './styles.js'
import { Section } from '../../Common/Section.jsx'
import { Grid } from '../../Common/Grid.jsx'
import { H2 } from '../../Common/Texts.jsx'
import { NoContent } from '../../Common/NoContent.jsx'
import { Card } from '../Card/index.jsx'
import { Button } from '../../Common/Inputs/Button.jsx'
import { useGetAll } from '../../../hooks/articles/useGetAll.js'

export const News = ({ title, full }) => {
    const news = useGetAll(full)

    return (
        <Section id="noticias">
            <H2>{title}</H2>
            {news.length > 0 ? (
                <ArticlesSectionStyled>
                    <Grid>
                        {news.map(article => (
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
