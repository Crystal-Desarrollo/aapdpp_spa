import styled from 'styled-components'
import { Section } from '../../Common/Section'

export const ProfileFormStyled = styled(Section)`
    form {
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-gap: 2rem;

        .change-picture {
            display: flex;
            flex-direction: column;
            align-items: center;

            .picture {
                width: 150px;
                height: 150px;
                margin-bottom: 2rem;

                display: flex;
                justify-content: center;

                border-radius: 50%;
                overflow: hidden;
                border: 2px solid #142b4b;

                img {
                    object-fit: cover;
                }
            }
        }

        .grid {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(3, 1fr);
            background-color: inherit;

            > :first-child {
                grid-column: span 3;
            }
            > :nth-child(3) {
                grid-column: span 2;
            }
            > :nth-child(5) {
                grid-column: span 2;
                grid-row: span 2;
            }

            > :last-child {
                grid-column: 1 / span 3;
            }
        }
    }
`
