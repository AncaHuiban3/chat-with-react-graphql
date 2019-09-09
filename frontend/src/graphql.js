import gql from 'graphql-tag'

export const CHATS_QUERY = gql`
  query chatsQuery {
    chats {
      id
      content
      from
      createdAt
    }
  }
`

export const CREATE_CHAT_MUTATION = gql`
  mutation CreateChatMutation($content: String!, $from: String!) {
    createChat(content: $content, from: $from) {
      id
      content
      from
      createdAt
    }
  }
`