import styled from 'styled-components'

import { CardStyled as BaseCard } from '../../Common/Card'

export const CardStyled = styled(BaseCard)`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    color: #1d3557;
    padding: 0;
  height: 100%;

    .img-container {
        height: 150px;
        width: 100%;
        display: flex;
        border-radius: 8px 8px 0 0;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .card-information {
      height: calc(100% - 150px);
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;

        & .card-date-author {
            font-size: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            & .card-date {
                display: flex;
                gap: 0.25rem;
                align-items: center;
            }
        }

        .card-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1d3557;
        }

        .card-description {
            font-size: 0.875rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .card-btn {
            color: #fff;
            width: 100%;
            text-align: center;
            transition: all ease 0.2s;
          margin-top: auto;

            &:hover {
                border-bottom-color: #1d3557;
                transition: all ease 0.3s;
            }
        }
    }
`
