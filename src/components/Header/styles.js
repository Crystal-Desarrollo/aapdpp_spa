import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;
    background-color: #1d3557;

    position: fixed;
    top: 0;
    z-index: 1;

    .content {
        width: 100%;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            height: 100%;

            display: flex;
            align-items: center;

            img {
                height: 100%;
                margin-right: 1rem;
            }

            h1 {
                font-weight: 700;
                color: #fff;
                font-size: 1.5rem;
            }
        }
    }
`
