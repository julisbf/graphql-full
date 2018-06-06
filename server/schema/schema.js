const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = graphql;

// dummy data
let records = [{
    id: '1',
    name: 'Vontade De Rever Você',
    genre: 'Boogie'
  }, {
    id: '2',
    name: 'Marcos Valle',
    genre: 'Funk/Soul'
  },
  {
    id: '3',
    name: 'Off The Wall',
    genre: 'Funk/Soul'
  }, {
    id: '4',
    name: 'Discovery',
    genre: 'Electronic'
  }
]

const RecordType = new GraphQLObjectType({
  name: 'Record',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    genre: {
      type: GraphQLString
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: RecordType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return records.find(record => record.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});