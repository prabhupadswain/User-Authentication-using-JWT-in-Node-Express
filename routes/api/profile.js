const express = require('express');
const router = express.Router();

// Custom Auth middleware
const auth = require('../../middleware/auth');

// Passport Auth middleware
require('../../middleware/passport');
const passport = require('passport');

// Import controllers
const profileControllers = require('../../controllers/profileControllers');

// Following is a protected route demo for Custom Auth Authentication

// @route    GET api/profile/auth_protected
// @desc     Get user by token
// @access   Private
router
  .route('/auth_protected')
  .get(auth, profileControllers.fetchProfileByCustomAuth);

// Following is a protected route demo for Passport Authentication

// @route    GET api/profile/passport_protected
// @desc     Get user by token
// @access   Private
router
  .route('/passport_protected')
  .get(
    passport.authenticate('jwt', { session: false }),
    profileControllers.fetchProfileByPassportAuth
  );

module.exports = router;
