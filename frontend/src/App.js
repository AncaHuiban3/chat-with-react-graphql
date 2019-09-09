import React, { useState, useEffect } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Signup from './screens/Auth/Signup'
import Chatbox from './screens/ChatPage/Chatbox'

import { style } from './styled'
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

  const createChat = async e => {
    if (e.key === 'Enter') {
      await createChatMutation({
        variables: { content, from },
      })
      setContent('')
    }
  }

  if (!from || from.length === 0) {
    return (
      <div style={style.wrapper}>
        <div style={style.signupWrapper}>
          <Signup signin={from => setFrom(from)} />
        </div>
      </div>
    )
  }

  return (
    <div style={style.wrapper}>
      <div style={style.chatWrapper}>
        <div style={style.chatTitleWrapper}>
          <h2 style={style.chatTitle}>
            <span>Chat</span>
            <span
              style={style.username}
              onClick={() => setFrom('')}
              title="logout"
            >
              {from}
            </span>
          </h2>
        </div>
        {chatsQuery.chats &&
          chatsQuery.chats.map(message => (
            <Chatbox
              key={message.id}
              message={message}
              currentUser={message.from === from}
            />
          ))}
        <div style={style.chatInputWrapper}>
          <input
            style={style.chatInput}
            type="text"
            placeholder="Start typing"
            value={content}
            onKeyPress={createChat}
            onChange={e => setContent(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default compose(
  graphql(CHATS_QUERY, { name: 'chatsQuery' }),
  graphql(CREATE_CHAT_MUTATION, { name: 'createChatMutation' }),
)(App)
