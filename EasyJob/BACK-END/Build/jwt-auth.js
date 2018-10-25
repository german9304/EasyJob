"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = require("passport-jwt");
var passport_1 = require("passport");
var client_auth_1 = require("./client-auth");
var userModel = require("./Models/user-schema").userModel;
var opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: client_auth_1.JWT_SECRET_KEY.key
};
var passportJWT = passport_1.use(new passport_jwt_1.Strategy(opts, function (jwt_payload, done) {
    var _id = jwt_payload._id, email = jwt_payload.email;
    userModel.findById(_id, function (err, user) {
        if (err)
            console.log(err);
        return user
            ? done(null, { _id: _id, email: email })
            : (console.log("user not fount"), done(null, false));
    });
}));
exports.default = passportJWT;
