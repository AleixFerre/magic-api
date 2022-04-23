import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { setupRoutes } from './routes/routes';
import morgan from 'morgan';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

if (process.env.LOGS === 'true') {
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: process.env.SECURE_ORIGIN,
  }),
);

// Adding all routes
setupRoutes(app);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server started at http://localhost:${port}`);
});

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGODBSRV)
  .then(() => {
    console.log('CONNECTAT CORRECTAMENT A LA BASE DE DADES!');
  })
  .catch(console.error);
