const { check, validationResult } = require('express-validator');

// @desc Register User validation
exports.register = [
  check('username', 'Name is required').notEmpty(),
  check('email', 'Please, enter a valid email').exists().isEmail(),
  check('password', 'Password shoud be of minimum six characters').isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },
];

// @desc User login validation
exports.login = [
  check('email', 'Please, enter a valid email').exists().notEmpty().isEmail(),
  check('password', 'Password cannot be left blank').exists().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },
];
