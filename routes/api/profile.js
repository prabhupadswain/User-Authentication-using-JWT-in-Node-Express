const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route    POST api/profile
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

module.exports = router;
