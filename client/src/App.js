import React, { Component } from 'react'
import RecordList from './components/RecordList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

//Apollo Client Setup
const client = new ApolloClient({
  uri: 'http:localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1> Records Inventory </h1>
          <RecordList />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
