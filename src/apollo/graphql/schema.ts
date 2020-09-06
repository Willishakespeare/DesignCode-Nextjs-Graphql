import { makeExecutableSchema } from 'apollo-server-micro';
import typeDefs from './type-defs/type-defs';
import resolvers from './resolvers/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
