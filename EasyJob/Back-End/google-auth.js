
const {GOOGLE_CLIENT} = require("./client-auth");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT.client_id,
    clientSecret: GOOGLE_CLIENT.client_secret,
    callbackURL: GOOGLE_CLIENT.redirect_uris
  },
  function(accessToken, refreshToken, profile, cb) {
  	
  }));
