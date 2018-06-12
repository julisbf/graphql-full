import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getRecordsQuery } from '../queries/queries'
import RecordDetails from './RecordDetails'

class RecordList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }
  displayRecords() {
    var data = this.props.data
    if (data.loading) {
      return <div>Loading records...</div>
    } else {
      return data.records.map(record => {
        return (
          <li
            key={record.id}
            onClick={e => this.setState({ selected: record.id })}
          >
            {record.name}
          </li>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="record-list">{this.displayRecords()}</ul>
        <RecordDetails recordId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getRecordsQuery)(RecordList)
