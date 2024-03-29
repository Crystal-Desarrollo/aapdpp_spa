import styled from 'styled-components'

export const SideMenuStyled = styled.nav`
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 90%;
    max-width: 254px;
    background-color: #fff;
    display: none;
    overflow-y: auto;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: ${props =>
        props.isOpenSideMenu ? `translateX(0)` : `translateX(100%)`};
    box-shadow: 0px 8px 28px -5px rgb(0 0 0 / 81%);

    & div {
        position: relative;

        & > svg {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.25rem;
            cursor: pointer;
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;

            & li {
                & a,
                & button {
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    color: #142b4b;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;

                    & i {
                        font-size: 1.3rem;
                        margin-right: 0.6rem;
                        margin-top: 0.3rem;
                    }

                    &:hover,
                    &:hover i {
                        background-color: #1d3557;
                        color: white;
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        display: block;
    }
`
