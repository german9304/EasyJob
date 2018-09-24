const jwt = require("jsonwebtoken");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const {JWT_SECRET_KEY} = require('./client-auth');

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: JWT_SECRET_KEY.key
}

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('jwt payload: ',jwt_payload);
    // const {jwtFromRequest} = opts;
    done(null, 'user');
}));