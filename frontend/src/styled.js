import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  margin: 0 auto;
  width: 100%;
`

export const SignUpWrapper = styled.div`
  padding: ${props => props.theme.spaces.x6};
`

export const ChatTitle = styled.div`
  background-color: #6fb0dc;
  padding: ${props => props.theme.spaces.x3} ${props => props.theme.spaces.x2};
  justify-content: space-between;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.spaces.x4};
  `
  
  export const Username = styled.span`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`
export const ChatInputWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
`

export const ChatInput = styled.input`
  border: 0 solid #333;
  border-top-width: 1;
  border-radius: 0;
  padding: 5;
  margin: 0;
  width: 100%;
`
