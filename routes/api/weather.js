const express = require('express');
const router = express.Router();

// Import passport-auth middleware
require('../../middleware/passport');
const passport = require('passport');

// Import controllers
const weatherControllers = require('../../controllers/weatherControllers');

// @route    GET api/weather/current
// @desc     Get current weather for location
// @access   Private
router
  .route('/current')
  .get(
    passport.authenticate('jwt', { session: false }),
    weatherControllers.fetchCurrentWeather
  );

// @route    GET api/weather/forecast
// @desc     Get weather forecast for location
// @access   Private
router
  .route('/forecast')
  .get(
    passport.authenticate('jwt', { session: false }),
    weatherControllers.fetchWeatherForecast
  );

module.exports = router;
