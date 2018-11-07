"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as jwt from "jsonwebtoken";
var passport_jwt_1 = require("passport-jwt");
var passport_1 = require("passport");
var client_auth_1 = require("./client-auth");
var user_schema_1 = require("./Models/user-schema");
function jwtPayloadStrategy(jwtPayload, done) {
    var _id = jwtPayload._id, email = jwtPayload.email;
    user_schema_1.userModel.findById(_id, function (err, user) {
        if (err)
            console.log(err);
        return user
            ? done(null, { _id: _id, email: email })
            : (console.log('user not found'), done(null, false));
    });
}
var opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: client_auth_1.JWT_SECRET_KEY.key,
};
passport_1.use(new passport_jwt_1.Strategy(opts, jwtPayloadStrategy));
