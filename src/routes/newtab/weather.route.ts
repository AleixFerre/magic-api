import fetch from 'node-fetch';

type Coords = {
  lat: number;
  lon: number;
};

export const weatherRoute = {
  getWeather: async (
    req: { body: Coords },
    res: { json: (arg0: any) => void },
  ) => {
    const { lat, lon } = req.body;
    const apiResponse = await fetch(getWeatherLink(lat, lon));
    res.json(await apiResponse.json());
  },
};

const getWeatherLink = (lat: number, lon: number) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`;
