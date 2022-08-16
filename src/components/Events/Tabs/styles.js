import styled from 'styled-components'

export const Tab = styled.div`
    padding-top: 1rem;
    display: flex;
    gap: 4rem;
    justify-content: center;

    & div {
        display: flex;
        flex-direction: column;
        border-radius: 1rem 1rem 0 0;
    }
    & p {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    & p.active {
        font-weight: 600;
    }
    & div.active {
        height: 0.25rem;
        background-color: #1d3557;
    }
`
