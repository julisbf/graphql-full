const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID
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
      type: GraphQLID
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
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});