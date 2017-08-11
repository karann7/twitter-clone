/* eslint-disable no-console */
import express from 'express';
import { createServer } from 'http';
import './config/db';
import mocks from './mocks';
import constants from './config/constants';
import middlewares from './config/middleware';

const app = express();
middlewares(app);

const graphQLServer = createServer(app);
mocks().then(() => {
  graphQLServer.listen(constants.PORT, () => {
    console.log(`Server is running on ${constants.PORT}`);
  });
});
