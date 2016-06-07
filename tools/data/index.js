import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} from 'graphql'

const data = require('./data.json');

let tenantType = new GraphQLObjectType({
  name: 'Tenant',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      tenant: {
        type: tenantType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: (_, args) => data[args.id]
      }
    }
  })
})

export default schema
