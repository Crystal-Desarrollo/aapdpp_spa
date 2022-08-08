import styled from 'styled-components'

export const AdminHeaderStyled = styled.nav`
    background-color: #f2f2f2;
    width: 100%;
    height: 40px;

    ul {
        padding-right: 1rem;
        list-style-type: none;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;

        display: flex;
        justify-content: flex-end;

        li {
            padding: 0 1rem;
            transition: all 0.3s ease;
            height: 100%;

            a {
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;

                text-decoration: none;
                color: #142b4b;

                i {
                    font-size: 1.3rem;
                    margin-right: 0.6rem;
                    margin-top: 0.3rem;
                }
            }

            &:hover {
                background-color: #cad4df;
            }
        }
    }

    display: block;

    @media (max-width: 1200px) {
        display: none;
    }
`
