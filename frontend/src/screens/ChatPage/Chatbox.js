import React, { memo } from 'react';
import { style } from './styled'
const Chatbox = ({ message, currentUser }) => (
  <div style={style.wrapper}>
    <div style={style.message}>
      <h5
        style={
          !!currentUser ? { ...style.author, color: '#5887a7' } : style.author
        }
      >
        {message.from}
      </h5>
      <p style={style.message}>{message.content}</p>
    </div>
  </div>
);

export default memo(Chatbox);
