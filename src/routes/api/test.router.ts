import express from 'express';
import { mockData } from './mock/weather.mock';

const ENDPOINT = '/api/test';

const router = express.Router();

router.post('/', (req, res) => {
  res.json(mockData);
});

export const testRoute = {
  ENDPOINT,
  router,
};
