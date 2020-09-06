import { ApolloServer } from 'apollo-server-micro';
import jwt from 'jsonwebtoken';
import schema from '../../apollo/graphql/schema';
import connectMongo from '../../apollo/middlewares/database';

connectMongo();

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    if (token) {
      try {
        const user = jwt.verify(token, process.env.USING_SECRETS);
        return {
          user
        };
      } catch (error) {}
    }
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
