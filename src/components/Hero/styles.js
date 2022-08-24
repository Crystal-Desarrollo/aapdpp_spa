import styled from 'styled-components'

export const HeroStyled = styled.section`
    width: 100%;
    max-height: 400px;

    display: flex;
    position: relative;

    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    div {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0, 0, 0, 0.7);
        position: absolute;

        p {
            color: #fff;
            font-size: 32px;
            font-weight: 700;
            text-align: center;

            max-width: 600px;
        }
    }
`
