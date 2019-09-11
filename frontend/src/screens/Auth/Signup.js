import React, { memo, useState } from 'react'
import { Wrapper, LabelWrapper, Input, Button, ContentWrapper } from './styled'

const Signup = ({ signin }) => {
  const [username, setUsername] = useState('')

  const submit = async e => {
    if (e.key === 'Enter') {
      signin(username)
    }
  }

  return (
    <Wrapper>
      <LabelWrapper>
        <label>Your username:</label>
      </LabelWrapper>
      <ContentWrapper>
        <Input
          type="text"
          placeholder="your username"
          value={username}
          onKeyPress={submit}
          onChange={e => setUsername(e.target.value)}
        />
        <Button onClick={() => signin(username)}>
          enter
        </Button>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(Signup)
