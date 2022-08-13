import styled from 'styled-components'
import { PageNotFound } from '../../asssets/img/images'

const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
`

const ImageContainer = styled.div`
    width: 90%;
    max-width: 280px;
`

export const NotFound = () => {
    return (
        <Section>
            <ImageContainer>
                <PageNotFound />
            </ImageContainer>
            <Title>
                No encontramos el
                <br />
                sitio que buscas 😢
            </Title>
        </Section>
    )
}
