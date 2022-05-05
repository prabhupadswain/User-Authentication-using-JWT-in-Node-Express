const jwt = require('jsonwebtoken');

// @desc Token verification
module.exports = function (req, res, next) {
  // Get token from header.
  const token = req.header('Authorization');

  //Check if no token
  if (!token)
    return res.status(401).json({ msg: 'Unauthorized, access denied' });

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
