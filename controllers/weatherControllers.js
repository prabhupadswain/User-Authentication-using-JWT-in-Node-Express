const axios = require('axios');

// @controller  Fetch current weather for the location
// @desc     Handles GET api/weather
const fetchCurrentWeather = async (req, res, next) => {
  const { location, weatherType } = req.body;
  try {
    const access_key = process.env.ACCESS_KEY;
    const url = process.env.BASE_URL;
    const result = await axios.get(`${url}/${weatherType}`, {
      params: {
        access_key,
        query: location,
      },
    });
    res.status(200).json({ data: result.data });
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

const fetchWeatherForecast = async (req, res, next) => {
  const { location, weatherType, forecast_days } = req.body;
  try {
    const access_key = process.env.ACCESS_KEY;
    const url = process.env.BASE_URL;
    const result = await axios.get(`${url}/${weatherType}`, {
      params: {
        access_key,
        query: location,
        forecast_days,
      },
    });
    res.status(200).json({ data: result.data });
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

module.exports = {
  fetchCurrentWeather,
  fetchWeatherForecast,
};
