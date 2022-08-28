import styled from 'styled-components'

export const Networks = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: white;
    background: #1d3557;
    padding: 2rem;
    font-size: 1.5rem;

    & a {
        color: white;
    }
`

export const MyFooter = styled.footer`
    margin-top: 4rem;
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: white;
    background-color: #1d3557;
    flex-wrap: wrap;
    text-align: center;
    row-gap: 10px;

    & strong a {
        color: white;
        text-decoration: none;
        padding: 0 6px;
    }
`
