import styled from 'styled-components'

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
  background-color: #ffffff;
  border: 1px solid #ddd;
  height: 40px;
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.lightBlue};
  color: white;
  margin-left: 10px;
`
