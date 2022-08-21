import styled from 'styled-components'

export const FullViewStyled = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;

    img {
        height: clamp(200px, 20vmax, 500px);
        object-fit: cover;
    }

    section {
        max-width: 700px;
        margin: 2rem auto;

        > div {
            display: flex;
            flex-direction: column;

            h2 {
                margin-top: 1.2rem;
            }

            span {
                margin-left: auto;
                i {
                    margin-right: 0.5rem;
                }
            }

            .description {
                margin-bottom: 1rem;
                margin-top: 1rem;
            }
        }
    }
`
