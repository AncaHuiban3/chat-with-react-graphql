import React, { memo, useState } from 'react'
import { style } from './styled'

const Signup = ({ signin }) => {
  const [username, setUsername] = useState('')

  const submit = async e => {
    if (e.key === 'Enter') {
      signin(username)
    }
  }

  return (
    <div style={style.wrapper}>
      <div style={style.label}>
        <label>Your username:</label>
      </div>

      <div>
        <input
          style={style.input}
          type="text"
          placeholder="your username"
          value={username}
          onKeyPress={submit}
          onChange={e => setUsername(e.target.value)}
        />
        <button style={style.button} onClick={() => signin(username)}>
          enter
        </button>
      </div>
    </div>
  )
}

export default memo(Signup)
