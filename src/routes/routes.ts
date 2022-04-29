import { Express } from 'express-serve-static-core';
import { catabotRoute } from './api/catabot.router';
import { homeRoute } from './api/home.router';
import { ApiRouter } from './api/models/api-router.model';
import { weatherRoute } from './api/weather.router';

const routers: ApiRouter[] = [weatherRoute, homeRoute, catabotRoute];

export const setupRoutes = (app: Express) => {
  routers.forEach((router) => {
    app.use(router.ENDPOINT, router.router);
  });
};
