import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    /* height: var(--header-height); */
    background-color: #1d3557;

    position: sticky;
    top: 0;
    z-index: 9999;

    .content {
        width: 100%;
        margin: 0 auto;
        padding: 0 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            height: 100%;

            display: flex;
            align-items: center;

            img {
                height: var(--header-height);
                margin-right: 1rem;
                padding: 8px;
            }
        }
    }

    @media (max-width: 1200px) {
        height: var(--header-height);
    }
`
