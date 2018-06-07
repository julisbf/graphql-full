const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

// dummy data
let records = [{
    id: '1',
    name: 'Vontade De Rever Você',
    genre: 'Boogie',
    year: 1981,
    artistId: '1'
  }, {
    id: '2',
    name: 'Marcos Valle',
    genre: 'Funk/Soul',
    year: 2017,
    artistId: '1'
  },
  {
    id: '3',
    name: 'Off The Wall',
    genre: 'Funk/Soul',
    year: 1979,
    artistId: '2'
  }, {
    id: '4',
    name: 'Discovery',
    genre: 'Electronic',
    year: 2001,
    artistId: '3'
  }, {
    id: '5',
    name: 'Around the World',
    genre: 'Electronic',
    year: 1997,
    artistId: '3'
  }, {
    id: '6',
    name: 'Bad',
    genre: 'Funk/Soul',
    year: 1987,
    artistId: '2'
  }
]

let artists = [{
    id: '1',
    name: 'Marcos Valle',
    country: 'Brazil'
  }, {
    id: '2',
    name: 'Michael Jackson',
    country: 'USA'
  },
  {
    id: '3',
    name: 'Daft Punk',
    country: 'France'
  }
]

/**
 * Type: RecordType
 */
const RecordType = new GraphQLObjectType({
  name: 'Record',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    genre: {
      type: GraphQLString
    },
    year: {
      type: GraphQLInt
    },
    artist: { //Type relative. Connects both queries
      type: ArtistType,
      resolve(parent, args) {
        return artists.find(artist => artist.id === parent.artistId);
      }
    }
  })
});

/**
 * Type: PerfomerType
 * Declare data of the artist or band 
 */
const ArtistType = new GraphQLObjectType({
  name: 'Artist',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    records: {
      type: new GraphQLList(RecordType),
      resolve(parent, args) {
        return records.filter(record => record.artistId === parent.id);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    record: {
      type: RecordType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return records.find(record => record.id === args.id);
      }
    },
    artist: {
      type: ArtistType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return artists.find(artist => artist.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});