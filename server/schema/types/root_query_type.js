const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // This is the query that will be used to check if a user is authenticated. If not, user will be null.
    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
  }
});

module.exports = RootQueryType;
