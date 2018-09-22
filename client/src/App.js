import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import RecordList from './components/RecordList';
import AddRecord from './components/AddRecord';

//Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { visible: false };
  }
  handleClick(evt) {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <main>
          <h1> Records Inventory </h1>
          <RecordList />
          <AddRecord visible={this.state.visible} />
          <button
            className={
              this.state.visible ? 'btn__open-form move-up' : 'btn__open-form'
            }
            type="button"
            onClick={this.handleClick}
          >
            {this.state.visible ? '⬇' : '+'}
          </button>
        </main>
      </ApolloProvider>
    );
  }
}

export default App;
