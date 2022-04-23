import express from 'express';
import { statsModel } from '../../schemas/stats.schema';

const ENDPOINT = '/api/catabot';

const router = express.Router();

router.get('/stats', (req, res) => {
  statsModel
    .find({})
    .lean()
    .then((stats: any) => {
      const { _id, ...info } = stats[0];
      res.json(info);
    });
});

export const catabotRoute = {
  ENDPOINT,
  router,
};
