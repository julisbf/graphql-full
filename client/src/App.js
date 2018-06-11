import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import RecordList from './components/RecordList'
import AddRecord from './components/AddRecord'

//Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1> Records Inventory </h1>
          <RecordList />
          <AddRecord />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
