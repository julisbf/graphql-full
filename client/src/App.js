import React, { Component } from 'react'
import RecordList from './components/RecordList'

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1> Records Inventory </h1>
        <RecordList />
      </div>
    )
  }
}

export default App
