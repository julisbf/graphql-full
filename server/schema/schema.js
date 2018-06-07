const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

//Models Schema from DB
const Record = require('../models/record');
const Artist = require('../models/artist');

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
        //return artists.find(artist => artist.id === parent.artistId);
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
        //return records.filter(record => record.artistId === parent.id);
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
        //return records.find(record => record.id === args.id);
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
        //return artists.find(artist => artist.id === args.id);
      }
    },
    records: {
      type: new GraphQLList(RecordType),
      resolve(parent, args) {
        //return records;
      }
    },
    artists: {
      type: new GraphQLList(ArtistType),
      resolve(parent, args) {
        //return artists;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});