const User = require('../models/User');

// @controller  Fetch profile by custom auth middleware
// @desc     Handles GET api/profile/auth_protected
const fetchProfileByCustomAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

// @controller  Fetch profile by passport middleware
// @desc     Handles GET api/profile/passport_protected
const fetchProfileByPassportAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    //console.log(req.user.id, user.id);
    res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

module.exports = {
  fetchProfileByCustomAuth,
  fetchProfileByPassportAuth,
};
