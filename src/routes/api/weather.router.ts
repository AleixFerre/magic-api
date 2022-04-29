import express from 'express';
import fetch from 'node-fetch';

const ENDPOINT = '/api/weather';

const router = express.Router();

const getWeatherLink = (lat: string, lon: string) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`;

router.get('/:lat/:lon', async (req, res) => {
  const { lat, lon } = req.params;

  const apiResponse = await fetch(getWeatherLink(lat, lon));
  res.json(await apiResponse.json());
});

export const weatherRoute = {
  ENDPOINT,
  router,
};
