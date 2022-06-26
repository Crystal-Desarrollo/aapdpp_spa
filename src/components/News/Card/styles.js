import styled from 'styled-components'

import { CardStyled as BaseCard } from '../../Common/Card'

export const CardStyled = styled(BaseCard)`
    .card-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        span {
            font-size: 0.75rem;

            display: flex;
            align-items: center;

            i {
                font-size: 1rem;
                margin-right: 0.3rem;
                color: #1d3557;
            }
        }
    }

    .img-container {
        height: 150px;
        width: 100%;
        display: flex;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }

    h3 {
        margin: 1rem 0;
        font-size: 1rem;
        font-weight: 600;
    }

    p {
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a {
            margin: 1rem 0 0 0;
        }
    }

    a {
        text-decoration: none;
        color: #1d3557;
        border-bottom: 1px solid transparent;

        transition: all ease 0.2s;

        &:hover {
            border-bottom-color: #1d3557;
            color: #082041;
            transition: all ease 0.3s;
        }
    }
`
