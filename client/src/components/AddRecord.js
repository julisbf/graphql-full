import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getArtistsQuery = gql`
  {
    artists {
      name
      id
    }
  }
`
class AddRecord extends Component {
  displayArtists() {
    let data = this.props.data

    if (data.loading) {
      return <option> Loading inventory...</option>
    } else {
      return data.artists.map(artist => {
        return <option key={artist.id}>{artist.name}</option>
      })
    }
  }
  render() {
    return (
      <form id="add-record">
        <div className="field">
          <label>Record name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Year:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Artist:</label>
          <select>
            <option>Select artist</option>
            {this.displayArtists()}
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default graphql(getArtistsQuery)(AddRecord)
