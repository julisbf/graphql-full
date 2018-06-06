const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = graphql;

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
  fileds: {
    record: {
      type: RecordType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        //Code to get data from db or other source
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});