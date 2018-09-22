import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getRecordsQuery } from '../queries/queries';
import RecordDetails from './RecordDetails';

class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayRecords() {
    var data = this.props.data;
    if (data.loading) {
      return <section>Loading records...</section>;
    } else {
      return data.records.map(record => {
        return (
          <li
            key={record.id}
            onClick={e => this.setState({ selected: record.id })}
          >
            {record.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <section>
        <ul id="record-list">{this.displayRecords()}</ul>
        <RecordDetails recordId={this.state.selected} />
      </section>
    );
  }
}

export default graphql(getRecordsQuery)(RecordList);
