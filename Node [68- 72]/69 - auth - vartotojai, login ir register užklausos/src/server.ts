import express from 'express';
import config from './config';
// import database from './services/database';

// TODO: Initiale first connection before lounching server
try {
  // database.connect((err) => {
  // if (err) {
  //   throw err;
  // }
  const server = express();

  // Middlewares
  server.use(express.json());

  // Routes

  server.listen(config.server.port, () => {
    console.log(`Server ir running on ${config.server.url}`);
  });
  // });
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }
}
