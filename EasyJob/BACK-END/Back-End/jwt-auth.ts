//import * as jwt from "jsonwebtoken";
import { Strategy, ExtractJwt } from "passport-jwt";
import { use } from "passport";
import { JWT_SECRET_KEY } from "./client-auth";
import { userModel } from "./Models/user-schema";
import { User } from "./user";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET_KEY.key
};
use(
  new Strategy(opts, function(jwt_payload, done) {
    const { _id, email } = jwt_payload;
    userModel.findById(_id, (err, user) => {
      if (err) console.log(err);
      return user
        ? done(null, { _id, email })
        : (console.log("user not fount"), done(null, false));
    });
  })
);
