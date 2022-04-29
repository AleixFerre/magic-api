import express from 'express';
import { commandsModel } from '../../schemas/commands.schema';
import { statsModel } from '../../schemas/stats.schema';

const ENDPOINT = '/api/catabot';

const router = express.Router();

const flattenDBValue = (value: any) => {
  const { _id, __v, ...info } = value;
  return info;
};

router.get('/stats', (_req, res) => {
  statsModel
    .find({})
    .lean()
    .then((stats) => {
      res.json(flattenDBValue(stats[0]));
    });
});

router.get('/commands', (_req, res) => {
  commandsModel
    .find({})
    .lean()
    .then((commands: any) => {
      res.json(commands.map(flattenDBValue));
    });
});

export const catabotRoute = {
  ENDPOINT,
  router,
};
