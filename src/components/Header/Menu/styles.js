import styled from 'styled-components'

export const StyledMenu = styled.ul`
    list-style: none;
    display: flex;

    a,
    button {
        display: flex;
        align-items: center;

        height: 60px;
        padding: 0 1rem;

        font-size: 1rem;
        text-decoration: none;
        color: #fff;

        &:hover {
            background-color: #142b4b;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;

        i {
            margin-right: 0.5rem;
            color: #fff;

            display: flex;
            align-items: center;
        }
    }

    //TODO: responsive
`
