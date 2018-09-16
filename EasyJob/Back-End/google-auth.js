const { GOOGLE_CLIENT } = require("./client-auth");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {
  userModel,
  findGoogleUser,
  createUserGoogle
} = require("./Database/db");

passport.serializeUser(function(userId, done) {
  done(null, userId);
});

passport.deserializeUser(function(id, done) {
  userModel.findById(id).then(user => {
    done(null, user);
  });
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
      findGoogleUser(id)
        .then(googleUser => {
          if (!googleUser) {
            const user = {
              id,
              value
            };
            const addedUser = createUserGoogle(user);
            addedUser.save(function(err, user) {
              done(null, user);
            });
          }
          done(null, googleUser);
        })
        .catch(error => console.log(error));
    }
  )
);
