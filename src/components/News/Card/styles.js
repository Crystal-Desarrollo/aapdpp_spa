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
        font-weight: 500;
    }

    p {
        font-size: 0.875rem;
    }
`
