import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LabelWrapper = styled.div`
  margin-bottom: ${props => props.theme.spaces.x2};
`

export const ContentWrapper = styled(Wrapper)`
  align-items: normal;
  flex-direction: row;
`

export const Input = styled.input`
  ${({
    theme: {
      colors: { grey, white },
      spaces: { x5 },
    },
  }) => css`
    background-color: ${white};
    border: 1px solid ${grey};
    height: ${x5};
  `}
`

export const Button = styled.button`
  ${({
    theme: {
      colors: { lightBlue, white },
      spaces: { x1 },
    },
  }) => css`
    background-color: ${lightBlue};
    color: ${white};
    margin-left: ${x1};
  `}
`
