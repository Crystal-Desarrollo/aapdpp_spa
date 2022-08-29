import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    padding: 1rem;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 0.5rem;
    background-color: #fff;
    gap: 8px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    flex-direction: ${props => props.flexDirection || 'row'};

    :hover {
        ${({ hover }) =>
            hover
                ? 'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'
                : ''}
    }
`

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || 'space-between'};
    gap: 0.5rem;
    width: 100%;
`

export const ImagenContainer = styled.figure`
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    overflow: hidden;
    border-radius: 0.5rem;
    & img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
`

export const FlexColumn = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    flex-direction: column;
`

export const Name = styled.h3`
    font-size: 1.25rem;
    font-weight: bold;
    color: #000000;
    word-break: break-word;
`

export const Joined = styled.h4`
    font-size: 0.625rem;
    color: #767676;
`

export const IsActive = styled.p`
    font-size: 0.625rem;
    color: #ffffff;
    background-color: #1d3557;
    padding: 0.5rem;
    border-radius: 0.5rem;
`
