/* eslint-disable no-console */
import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import './config/db';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import constants from './config/constants';
import mocks from './mocks';

const app = express();
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

const graphQLServer = createServer(app);
mocks().then(() => {
  graphQLServer.listen(constants.PORT, () => {
    console.log(`Server is running on ${constants.PORT}`);
  });
});
