
const {GOOGLE_CLIENT} = require("./client-auth");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null,user);
});

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT.client_id,
    clientSecret: GOOGLE_CLIENT.client_secret,
    callbackURL: GOOGLE_CLIENT.redirect_uris[0]
  },
  function(accessToken, refreshToken, profile, done) {
  	   console.log('profile: ',profile);
  	   done(null, profile)
  }));
