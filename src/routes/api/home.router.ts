import express from 'express';

const ENDPOINT = '/api';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Welcome to my personal API! Please be kind.');
});

export const homeRoute = {
  ENDPOINT,
  router,
};
