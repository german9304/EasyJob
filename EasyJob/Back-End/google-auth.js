const { GOOGLE_CLIENT } = require("./client-auth");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { userModel, findUser, createUserGoogle } = require("./Database/db");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT.client_id,
      clientSecret: GOOGLE_CLIENT.client_secret,
      callbackURL: GOOGLE_CLIENT.redirect_uris[0]
    },
    function(accessToken, refreshToken, profile, done) {
      //console.log("profile: ", profile);
      const { id, displayName, emails } = profile;
      const { value } = emails[0];
      findUser(id)
        .then(googleId => {
          if (!googleId) {
            const user = {
              id,
              value
            };
            // console.log("user");
            const addedUser = createUserGoogle(user);
            addedUser.save(function(err, user) {});
          }
          //console.log(id);
        })
        .catch(error => console.log(error));

      done(null, value);
    }
  )
);
