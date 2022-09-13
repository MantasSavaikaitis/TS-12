import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import authRouter from './routers/auth-router';
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
  server.use(morgan('tiny'));
  server.use(cors());

  // Routes
  server.use('/api/auth', authRouter);

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
