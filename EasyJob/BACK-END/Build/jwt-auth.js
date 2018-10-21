"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const JwtStrategy = require("passport-jwt").Strategy;
var JwtStrategy = require("passport-jwt");
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const passport = require("passport");
var passport = require("passport");
// const { JWT_SECRET_KEY } = require("./client-auth");
var client_auth_1 = require("./client-auth");
var userModel = require("./Database/user-schema").userModel;
var jwtStrategy = JwtStrategy.Strategy;
var extractJWT = JwtStrategy.ExtractJwt;
var opts = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: client_auth_1.JWT_SECRET_KEY.key
};
passport.use(new jwtStrategy(opts, function (jwt_payload, done) {
    var _id = jwt_payload._id, email = jwt_payload.email;
    userModel.findById(_id, function (err, user) {
        if (err)
            console.log(err);
        return user
            ? done(null, { _id: _id, email: email })
            : (console.log("user not fount"), done(null, false));
    });
}));
