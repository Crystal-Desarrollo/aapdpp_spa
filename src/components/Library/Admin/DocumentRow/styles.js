import styled from 'styled-components'

export const DocumentRowStyled = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1rem 0.2rem 2rem;
    margin-bottom: 0;
    border-bottom: 1px #ccc solid;

    background: #fff;

    span {
        max-width: 90%;
        display: flex;
        align-items: center;
        i {
            margin-right: 0.5rem;
            font-size: 1.2rem;
        }
    }

    .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
