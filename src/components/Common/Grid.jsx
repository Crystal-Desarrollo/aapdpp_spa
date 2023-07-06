import styled from 'styled-components'

export const GridStyled = styled.section`
  display: grid;
  grid-gap: 3rem;
  grid-auto-rows: 1fr;
  ${({ elementWidth }) =>
          elementWidth
                  ? `grid-template-columns: repeat(auto-fill, minmax(${elementWidth}, 1fr));`
                  : 'grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));'}

`

export const Grid = ({ children, elementWidth }) => {
    return <GridStyled elementWidth={elementWidth}>{children}</GridStyled>
}
