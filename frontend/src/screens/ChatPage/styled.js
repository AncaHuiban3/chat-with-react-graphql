import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({
    theme: {
      colors: { background },
      spaces: { x1 },
    },
  }) => css`
    background-color: ${background};
    padding: ${x1} / 2;
    overflow: scroll;
  `}
`

export const Author = styled.h5`
  ${({
    theme: {
      spaces: { x1 },
    },
  }) => css`
    font-weight: bolder;
  `}
`
export const AuthorColorized = styled(Author)`
  font-color: #5887a7;
`

export const Message = styled.div`
  ${({
    theme: {
      spaces: { x1 },
      fontSize: { paragraph },
    },
  }) => css`
    font-size: ${paragraph};
    padding: 0;
    margin: 0 0 0 ${x1};
  `}
`

export const Paragraph = styled.p`
  ${({
    theme: {
      spaces: { x1 },
    },
  }) => css`
    margin: 0 0 0 ${x1};
  `}
`
