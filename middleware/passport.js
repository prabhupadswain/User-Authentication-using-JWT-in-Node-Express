// Import Passport middleware modules
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Import User model and global config
const config = require('config');
const User = require('../models/User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('SECRET_TOKEN');

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    //console.log(jwt_payload);
    User.findOne({ id: jwt_payload.user.id }, (err, user) => {
      if (err) return done(err, false);
      if (user) return done(null, user);
      else return done(null, false);
    });
  })
);
