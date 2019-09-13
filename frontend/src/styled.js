import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({
    theme: {
      colors: { background },
    },
  }) => css`
    background-color: ${background};
    margin: 0 auto;
    width: 100%;
  `}
`

export const SignUpWrapper = styled.div`
  ${({
    theme: {
      spaces: { x6 },
    },
  }) => css`
    padding: ${x6};
  `}
`

export const ChatTitle = styled.div`
  ${({
    theme: {
      colors: { white },
      spaces: { x2, x3, x4 },
    },
  }) => css`
    background-color: #6fb0dc;
    padding: ${x2} ${x2};
    justify-content: space-between;
    display: flex;
    align-items: center;
    color: ${white};
    font-size: ${x4};
  `}
`

export const Username = styled.span`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`
export const ChatInputWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: row;
`

export const ChatInput = styled.input`
  width: 80%;
`
export const Button = styled.button`
  ${({
    theme: {
      colors: { lightBlue },
      spaces: { x1 },
    },
  }) => css`
    background-color: ${lightBlue};
    color: white;
    margin-left: ${x1};
    width: 20%;
  `}
`
