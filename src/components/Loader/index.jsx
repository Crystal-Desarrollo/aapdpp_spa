import { LoaderRing, Container } from './styles'

export const Loader = ({ backgroundTransparent }) => {
    return (
        <Container backgroundTransparent={backgroundTransparent}>
            <LoaderRing>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LoaderRing>
        </Container>
    )
}
