import express from 'express';
import fetch from 'node-fetch';

const ENDPOINT = '/api/weather';

const router = express.Router();

const getWeatherLink = (lat: number, lon: number) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`;

router.post('/', async (req, res) => {
  const { lat, lon } = req.body;
  const apiResponse = await fetch(getWeatherLink(lat, lon));
  res.json(await apiResponse.json());
});

export const weatherRoute = {
  ENDPOINT,
  router,
};
