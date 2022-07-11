import styled from 'styled-components'

import { BoxStyled } from '../../Common/Box'
export const LinksListStyled = styled(BoxStyled)`
    table {
        width: 100%;
        border-collapse: collapse;

        th,
        td {
            padding: 0.5rem 1rem;
            text-align: left;
        }

        th {
            color: #142b4b;
            font-weight: 500;
        }

        td {
            font-size: 0.875rem;

            :last-child {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }

            button,
            a {
                background-color: transparent;
                border: none;

                padding: 0.2rem 0.5rem;
                font-size: 1rem;
                color: #142b4b;

                cursor: pointer;

                :disabled {
                    color: #ddd;
                    cursor: default;
                }
            }
        }

        thead {
            background-color: #ddd;
        }

        tbody {
            tr {
                border-bottom: 1px solid #ddd;
            }
        }
    }
`

export const MainActionsStyled = styled.div`
    display: flex;
    justify-content: flex-end;

    margin-bottom: 1rem;
`
