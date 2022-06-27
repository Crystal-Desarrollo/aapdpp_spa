import styled from 'styled-components'

export const FullViewStyled = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;

    img {
        height: clamp(200px, 35vmax, 500px);
        object-fit: cover;
    }

    section {
        max-width: 700px;
        margin: 2rem auto;

        display: flex;
        flex-direction: column;

        span {
            align-self: flex-end;
            i {
                margin-right: 0.5rem;
            }
        }

        .description {
            margin-bottom: 3rem;
            margin-top: 1rem;
        }
    }
`
