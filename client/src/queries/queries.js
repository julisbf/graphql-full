import {
  gql
} from 'apollo-boost'

const getRecordsQuery = gql `
  {
    records {
      name
      id
    }
  }
`

const getArtistsQuery = gql `
  {
    artists {
      name
      id
    }
  }
`

const addRecordMutation = gql `
  mutation($name: String!, $genre:String!, $year:Int!, $artistId:ID!) {
    addRecord(name:$name, genre:$genre, year:$year, artistId:$artistId) {
      name
      id
    }
  }
`

const getRecordQuery = gql `
  query GetRecord($id: ID) {
    record(id: $id) {
      id
      name
      genre
      year
      artist {
        id
        name
        records {
          id
          name
          year
        }
      }
    }
  }
`

export {
  getArtistsQuery,
  getRecordsQuery,
  addRecordMutation,
  getRecordQuery
};