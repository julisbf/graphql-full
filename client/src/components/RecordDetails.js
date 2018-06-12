import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getRecordQuery } from '../queries/queries'

class RecordDetails extends Component {
  displayRecordDetails() {
    const { record } = this.props.data
    if (record) {
      return (
        <div>
          <h2>{record.name}</h2>
          <p>{record.artist.name}</p>
          <p>
            {record.genre} - {record.year}
          </p>
          <p>All records by this artist:</p>
          <ul className="other-records">
            {record.artist.records.map(item => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return <div>No record selected...</div>
    }
  }
  render() {
    return <div id="record-details">{this.displayRecordDetails()}</div>
  }
}

export default graphql(getRecordQuery, {
  options: props => {
    return {
      variables: {
        id: props.recordId
      }
    }
  }
})(RecordDetails)
