import { Router } from 'express';

export type ApiRouter = {
  ENDPOINT: string;
  router: Router;
};
