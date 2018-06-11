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
  displayRecords() {
    let data = this.props.data

    if (data.loading) {
      return <div> Loading inventory...</div>
    } else {
      return data.records.map(record => {
        return <li key={record.id}>{record.name}</li>
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="record-list">{this.displayRecords()}</ul>
      </div>
    )
  }
}

export default graphql(getRecordsQuery)(RecordList)
