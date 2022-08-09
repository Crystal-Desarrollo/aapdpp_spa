import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: #fff;
    padding: ${props => props.padding || '1rem'};
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
    max-width: ${props => props.maxWidth || 'none'};
`

export const Flex = styled.div`
    display: flex;
    gap: 0.5rem;
`
export const IconText = styled.p`
    color: #777777;
    gap: 0.5rem;

    & svg {
        margin-right: 0.3rem;
    }
`
