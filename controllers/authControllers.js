const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

// @controller  Register User
// @desc     Handles POST api/auth/register
const registerUser = async (req, res, next) => {
  // Extract data from request body
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user)
      return res
        .status(409)
        .json({ errors: [{ msg: 'Email Id already exists' }] });

    //Encrypt or hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({
      username,
      email,
      password: hashPassword,
    });

    // Save user to DB
    await user.save();

    // Return JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('SECRET_TOKEN'),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

// @controller  Authenticate user & generate token
// @desc     Handles POST api/auth/login
const loginUser = async (req, res, next) => {
  // Extract data from request body
  const { email, password } = req.body;
  try {
    // Check if email matches and return respective user
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });

    // Password check
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });

    // Return JWT
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get('SECRET_TOKEN'),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.header('x-auth-token', token);
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};
module.exports = {
  registerUser,
  loginUser,
};
