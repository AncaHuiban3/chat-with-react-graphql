import React, { memo } from 'react';
import { Author, AuthorColorized, Message, Wrapper, Paragraph } from './styled'
const Chatbox = ({ message, currentUser }) => (
  <Wrapper>
    <Message>
      {!!currentUser ? <AuthorColorized/> : <Author/>}
        {message.from}
      <Paragraph>{message.content}</Paragraph>
    </Message>
  </Wrapper>
);

export default memo(Chatbox);
