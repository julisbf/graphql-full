import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getArtistsQuery,
  addRecordMutation,
  getRecordsQuery
} from '../queries/queries';

class AddRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      year: '',
      artistId: ''
    };
  }
  displayArtists() {
    let data = this.props.getArtistsQuery;
    if (data.loading) {
      return <option> Loading inventory...</option>;
    } else {
      return data.artists.map(artist => {
        return (
          <option key={artist.id} value={artist.id}>
            {artist.name}
          </option>
        );
      });
    }
  }
  submitForm(evt) {
    evt.preventDefault();
    this.props.addRecordMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        year: this.state.year,
        artistId: this.state.artistId
      },
      refetchQueries: [{ query: getRecordsQuery }]
    }); //adds records and rerendering the record's list
  }
  render() {
    let show = this.props.visible;
    return (
      <section
        id="form"
        className={show ? 'form slide-in-bottom' : 'form slide-out-bottom'}
      >
        <form id="add-record" onSubmit={this.submitForm.bind(this)}>
          <div className="field">
            <label htmlFor="record">Record name:</label>
            <input
              id="record"
              type="text"
              onChange={evt => this.setState({ name: evt.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="genre">Genre:</label>
            <input
              id="genre"
              type="text"
              onChange={evt => this.setState({ genre: evt.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="year">Year:</label>
            <input
              id="year"
              type="text"
              onChange={evt =>
                this.setState({ year: parseInt(evt.target.value, 10) })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="artist">Artist:</label>
            <select
              id="artist"
              className="artist-list"
              onChange={evt => this.setState({ artistId: evt.target.value })}
            >
              <option>Select artist</option>
              {this.displayArtists()}
            </select>
          </div>
          <button class="btn__add-record">save</button>
        </form>
      </section>
    );
  }
}

export default compose(
  graphql(getArtistsQuery, { name: 'getArtistsQuery' }),
  graphql(addRecordMutation, { name: 'addRecordMutation' })
)(AddRecord);
