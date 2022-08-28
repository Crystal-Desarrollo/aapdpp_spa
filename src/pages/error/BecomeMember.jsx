import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { BecomeMemberImage } from '../../asssets/img/images'
import { Button } from '../../components/Common/Inputs/Button'

const Section = styled.section`
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`

const ImageContainer = styled.div`
    width: 90%;
    max-width: 280px;
`

export const BecomeMember = () => {
    return (
        <Section>
            <Title>
                Hazte Miembro <br /> para acceder
            </Title>
            <ImageContainer>
                <BecomeMemberImage />
            </ImageContainer>
            <Button>
                <HashLink to="/#contacto" style={{ color: 'white' }}>
                    Ponte en contacto con nosotros
                </HashLink>
            </Button>
        </Section>
    )
}
