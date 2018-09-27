const { GOOGLE_CLIENT } = require("./client-auth");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("./client-auth");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {
  userModel,
  findGoogleUser,
  createUserGoogle
} = require("./Database/user-schema");

passport.serializeUser(function(userId, done) {
  done(null, userId);
});

passport.deserializeUser(function(id, done) {
  userModel.findById(id).then(user => {
    done(null, user);
  });
});

// const testmiddleware = () => {
//   return (req, res, next) => {
//     console.log(req.query);
//     passport.use(
//       new GoogleStrategy(
//         {
//           clientID: GOOGLE_CLIENT.client_id,
//           clientSecret: GOOGLE_CLIENT.client_secret,
//           callbackURL: GOOGLE_CLIENT.redirect_uris[0]
//         },
//         async function(accessToken, refreshToken, profile, done) {
//           //console.log("profile: ", profile);
//           const { id, displayName, emails } = profile;
//           const { value: email } = emails[0];
//           const googleUser = await findGoogleUser(id);
//           if (!googleUser) {
//             const googleid = id;
//             const user = {
//               id,
//               email
//             };
//             const addedUser = createUserGoogle(user);
//             const token = jwt.sign({ addedUser }, JWT_SECRET_KEY.key);
//             addedUser.jwt = token;
//             const newuser = await addedUser.save();
//             next();
//             return done(null, newuser);
//           }
//           console.log(googleUser);
//           next();
//           return done(null, googleUser);
//         }
//       )
//     );
//   };
// };
// module.exports = { testmiddleware };

const candidate_employer = (req, res, next) => {
  const { query } = req;
  req.session = query;
  next();
};

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
      const { value: email } = emails[0];
      const googleUser = await findGoogleUser(id);
      if (!googleUser) {
        const googleid = id;
        const user = {
          id,
          email
        };
        const addedUser = createUserGoogle(user);
        const token = jwt.sign({ addedUser }, JWT_SECRET_KEY.key);
        addedUser.jwt = token;
        const newuser = await addedUser.save();
        return done(null, newuser);
      }

      return done(null, googleUser);
    }
  )
);
