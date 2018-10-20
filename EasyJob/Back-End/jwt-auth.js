const jwt = require("jsonwebtoken");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const { JWT_SECRET_KEY } = require("./client-auth");
const { userModel } = require("./Database/user-schema");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET_KEY.key
};
passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    const { _id, email } = jwt_payload;
    userModel.findById(_id, (err, user) => {
      if (err) console.log(err);
      return user
        ? done(null, { _id, email })
        : (console.log("user not fount"), done(null, false));
    });
  })
);
