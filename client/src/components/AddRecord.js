import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { getArtistsQuery, addRecordMutation } from '../queries/queries'

class AddRecord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      genre: '',
      year: '',
      artistId: ''
    }
  }
  displayArtists() {
    let data = this.props.getArtistsQuery

    if (data.loading) {
      return <option> Loading inventory...</option>
    } else {
      return data.artists.map(artist => {
        return <option key={artist.id}>{artist.name}</option>
      })
    }
  }
  submitForm(evt) {
    evt.preventDefault()
    this.props.addRecordMutation() //adds records
  }
  render() {
    return (
      <form id="add-record" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Record name:</label>
          <input
            type="text"
            onChange={evt => this.setState({ name: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={evt => this.setState({ genre: evt.target.value })}
          />
        </div>
        <div className="field">
          <label>Year:</label>
          <input
            type="text"
            onChange={evt =>
              this.setState({ year: parseInt(evt.target.value, 10) })
            }
          />
        </div>
        <div className="field">
          <label>Artist:</label>
          <select
            onChange={evt => this.setState({ artistId: evt.target.value })}
          >
            <option>Select artist</option>
            {this.displayArtists()}
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
  graphql(getArtistsQuery, { name: 'getArtistsQuery' }),
  graphql(addRecordMutation, { name: 'addRecordMutation' })
)(AddRecord)
