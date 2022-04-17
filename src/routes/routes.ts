import { Express } from 'express-serve-static-core';
import { homeRoute } from './api/home.router';
import { ApiRouter } from './api/models/api-router.model';
import { testRoute } from './api/test.router';
import { weatherRoute } from './api/weather.router';

const routers: ApiRouter[] = [weatherRoute, homeRoute, testRoute];

export const setupRoutes = (app: Express) => {
  routers.forEach((router) => {
    app.use(router.ENDPOINT, router.router);
  });
};
