import styled from 'styled-components'

export const SideMenuStyled = styled.nav`
    position: fixed;
    right: 0;
    height: 100vh;
    width: 90%;
    max-width: 254px;
    background-color: #f2f2f2;
    display: none;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: ${props =>
        props.isOpenSideMenu ? `translateX(0)` : `translateX(100%)`};
    box-shadow: 0px 8px 28px -5px rgb(0 0 0 / 81%);

    ul {
        padding: 1rem;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & li a {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: #142b4b;

            & i {
                font-size: 1.3rem;
                margin-right: 0.6rem;
                margin-top: 0.3rem;
            }
        }
    }

    @media (max-width: 1200px) {
        display: block;
    }
`
