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

export {
  getArtistsQuery,
  getRecordsQuery
};