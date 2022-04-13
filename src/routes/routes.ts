import { Express } from 'express-serve-static-core';
import { homeRoute } from './home/home.route';
import { weatherRoute } from './newtab/weather.route';

const routes = {
  weatherRoute,
  homeRoute,
};

export const setupRoutes = (app: Express) => {
  app.get('/', routes.homeRoute.getHome);
  app.get('/api', routes.homeRoute.getHome);
  app.post('/api/weather', routes.weatherRoute.getWeather);
};
