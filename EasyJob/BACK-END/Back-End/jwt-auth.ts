import * as jwt from "jsonwebtoken";
import * as JwtStrategy from "passport-jwt";
import * as passport from "passport";
import { JWT_SECRET_KEY } from "./client-auth";
const { userModel } = require("./Database/user-schema");
import { User } from "./user";
const jwtStrategy = JwtStrategy.Strategy;
const extractJWT = JwtStrategy.ExtractJwt;
const opts: Options = {
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET_KEY.key
};
const passportJWT = passport.use(
  new jwtStrategy(opts, function(jwt_payload, done) {
    const { _id, email } = jwt_payload;
    userModel.findById(_id, (err, user) => {
      if (err) console.log(err);
      return user
        ? done(null, { _id, email })
        : (console.log("user not fount"), done(null, false));
    });
  })
);

interface Options {
  jwtFromRequest: JwtStrategy.JwtFromRequestFunction;
  secretOrKey: string;
}

export default passportJWT;
