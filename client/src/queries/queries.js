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
  mutation {
    addRecord(name:"", genre:"", year:0, artistId:"") {
      name
      id
    }
  }
`

export {
  getArtistsQuery,
  getRecordsQuery,
  addRecordMutation
};