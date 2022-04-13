import { Express } from 'express-serve-static-core';
import { weatherRoute } from './newtab/weather.route';

const routes = {
  weatherRoute,
};

export const setupRoutes = (app: Express) => {
  app.post('/api/weather', routes.weatherRoute.getWeather);
};
