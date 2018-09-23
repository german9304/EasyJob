const { GOOGLE_CLIENT } = require("./client-auth");
const passport = require("passport");
const jwt = require("jsonwebtoken");
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
    async function(accessToken, refreshToken, profile, done) {
      //console.log("profile: ", profile);
      const { id, displayName, emails } = profile;
      const { value } = emails[0];
        const googleUser = await findGoogleUser(id);
          if (!googleUser) {
             const user = {
              id,
              value
            };
            const addedUser = createUserGoogle(user);
            const newuser = await addedUser.save();
            return done(null,  newuser);
          }
         return done(null, googleUser);
    }
  )
);
