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
    justify-content: ${props => props.justifyContent || 'normal'};
`

export const Flex = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-direction: ${props => props.flexDirection || 'row'};
`
export const IconText = styled.p`
    color: #777777;
    gap: 0.5rem;

    & svg {
        margin-right: 0.3rem;
    }
`
export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`
