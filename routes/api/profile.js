const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// Custom Auth middleware
const auth = require('../../middleware/auth');

// Passport Auth middleware
require('../../middleware/passport');
const passport = require('passport');

// @route    GET api/profile
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res, next) => {
  try {
    //res.send(req.user);
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

// Following is a protected route demo for Passport Authentication

// @route    GET api/profile/protected
// @desc     Get user by token
// @access   Private
router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).json({
      user: {
        name: req.user.username,
        email: req.user.email,
      },
    });
  }
);

module.exports = router;
