import styled from 'styled-components'

export const StyledMenu = styled.ul`
    list-style: none;
    display: flex;

    a {
        display: flex;
        align-items: center;

        height: 60px;
        padding: 0 1rem;
        text-decoration: none;
        color: #fff;

        &:hover {
            background-color: #142b4b;
        }
    }

    //TODO: responsive
`
