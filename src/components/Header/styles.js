import styled, { createGlobalStyle } from 'styled-components'

export const AdminHeaderStyle = createGlobalStyle`
    *{
        --header-height: 100px;
    }
`

export const HeaderStyled = styled.header`
    width: 100%;
    height: var(--header-height);
    background-color: #1d3557;

    position: sticky;
    top: 0;
    z-index: 9999;

    .content {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            height: 100%;

            display: flex;
            align-items: center;

            img {
                height: 60px;
                margin-right: 1rem;
            }

            h1 {
                font-weight: 700;
                color: #fff;
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 1200px) {
        height: 60px;
    }
`
