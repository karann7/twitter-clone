import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import constants from './constants';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';

export default app => {
  const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
  app.use(bodyParser.json());
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: constants.GRAPHQL_PATH,
    }),
  );

  app.use(
    constants.GRAPHQL_PATH,
    graphqlExpress({
      schema,
    }),
  );
}