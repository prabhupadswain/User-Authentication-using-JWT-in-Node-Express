const express = require('express');
const router = express.Router();
const authControllers = require('../../controllers/authControllers');
const validate = require('../../validation/auth');

// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.route('/register').post(validate.register, authControllers.registerUser);

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.route('/login').post(validate.login, authControllers.loginUser);

module.exports = router;
