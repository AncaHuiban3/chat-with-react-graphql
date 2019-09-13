import React, { useState, useEffect } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Signup from './screens/Auth/Signup'
import Chatbox from './screens/ChatPage/Chatbox'

import {
  ChatInput,
  Wrapper,
  SignUpWrapper,
  ChatTitle,
  Username,
  ChatInputWrapper,
  Button,
} from './styled'
import { CHATS_QUERY, CREATE_CHAT_MUTATION } from './graphql'

const App = ({ chatsQuery, createChatMutation }) => {
  const [from, setFrom] = useState('')
  const [content, setContent] = useState('')

  const subscribeToNewChats = () => {
    chatsQuery.subscribeToMore({
      document: gql`
        subscription MessageSentSubscription {
          messageSent {
            id
            content
            from
            createdAt
          }
        }
      `,
      updateQuery: (previousData, { subscriptionData }) => {
        return {
          chats: [
            subscriptionData.data.messageSent,
            ...previousData.chats,
          ].splice(0, 8),
        }
      },
    })
  }

  useEffect(() => {
    subscribeToNewChats()
  }, [])

  const createChat = async () => {
    await createChatMutation({
      variables: { content, from },
    })
    setContent('')
  }

  if (!from || from.length === 0) {
    return (
      <Wrapper>
        <SignUpWrapper>
          <Signup signin={from => setFrom(from)} />
        </SignUpWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ChatTitle>
        <span>Chat</span>
        <Username onClick={() => setFrom('')} title="logout">
          {from}
        </Username>
      </ChatTitle>
      {chatsQuery.chats &&
        chatsQuery.chats.map(message => (
          <Chatbox
            key={message.id}
            message={message}
            currentUser={message.from === from}
          />
        ))}
      <ChatInputWrapper>
        <ChatInput
          type="text"
          placeholder="Start typing"
          value={content}
          onKeyPress={e => e.key === 'Enter' && createChat()}
          onChange={e => setContent(e.target.value)}
        />
        <Button onClick={createChat}> Send </Button>
      </ChatInputWrapper>
    </Wrapper>
  )
}

export default compose(
  graphql(CHATS_QUERY, { name: 'chatsQuery' }),
  graphql(CREATE_CHAT_MUTATION, { name: 'createChatMutation' }),
)(App)
