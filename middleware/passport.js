// Import Passport middleware modules
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Import User model
const User = require('../models/User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_TOKEN;

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    //console.log(jwt_payload);
    User.findById(jwt_payload.user.id, (err, user) => {
      // console.log(user);
      if (err) return done(err, false);
      if (user) return done(null, user);
      else return done(null, false);
    });
  })
);
