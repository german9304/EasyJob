"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_auth_1 = require("./client-auth");
var passport_1 = require("passport");
var passport = require("passport");
var jwt = require("jsonwebtoken");
var client_auth_2 = require("./client-auth");
var gooogleStrategy = require("passport-google-oauth2");
var user_schema_1 = require("./Models/user-schema");
passport.serializeUser(function (userId, done) {
    done(null, userId);
});
passport.deserializeUser(function (id, done) {
    user_schema_1.userModel.findById(id).then(function (user) {
        done(null, user);
    });
});
var candidate_employer = function (req, res, next) {
    var query = req.query;
    req.session = query;
    next();
};
passport_1.use(new gooogleStrategy.Strategy({
    clientID: client_auth_1.GOOGLE_CLIENT.client_id,
    clientSecret: client_auth_1.GOOGLE_CLIENT.client_secret,
    callbackURL: client_auth_1.GOOGLE_CLIENT.redirect_uris[0]
}, function (accessToken, refreshToken, profile, done) {
    return __awaiter(this, void 0, void 0, function () {
        var id, displayName, emails, email, googleUser, googleId, user, addedUser, token, newuser, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = profile.id, displayName = profile.displayName, emails = profile.emails;
                    email = emails[0].value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, user_schema_1.findGoogleUser(id)];
                case 2:
                    googleUser = _a.sent();
                    if (!!googleUser) return [3 /*break*/, 4];
                    googleId = id;
                    user = {
                        googleId: googleId,
                        email: email,
                        jwt: ""
                    };
                    addedUser = user_schema_1.createUserGoogle(user);
                    token = jwt.sign({ addedUser: addedUser }, client_auth_2.JWT_SECRET_KEY.key);
                    addedUser.jwt = token;
                    return [4 /*yield*/, addedUser.save()];
                case 3:
                    newuser = _a.sent();
                    return [2 /*return*/, done(null, newuser)];
                case 4: return [2 /*return*/, done(null, googleUser)];
                case 5:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}));
