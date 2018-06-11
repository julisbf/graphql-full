import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getRecordsQuery = gql`
  {
    records {
      name
      id
    }
  }
`

class RecordList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul id="record-list">
          <li>Record Name</li>
        </ul>
      </div>
    )
  }
}

export default graphql(getRecordsQuery)(RecordList)
