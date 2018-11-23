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
var passport_1 = require("passport");
var JWT = require("jsonwebtoken");
var passport_local_1 = require("passport-local");
var client_auth_1 = require("./client-auth");
var user_schema_1 = require("./Models/user-schema");
// const localStrategy = LocalStrategy.Strategy;
passport_1.serializeUser(function (userId, done) { return done(null, userId); });
passport_1.deserializeUser(function (id, done) {
    user_schema_1.userModel.findById(id).then(function (user) { return done(null, user); });
});
function createUserStrategy(email, password, done) {
    var _this = this;
    user_schema_1.userModel.findOne({ email: email }, function (err, user) { return __awaiter(_this, void 0, void 0, function () {
        var jwt, newUser, newToken, usr, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (err) {
                        console.error(err);
                    }
                    if (!!user) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    jwt = '1123';
                    newUser = user_schema_1.createUser({ email: email, password: password, jwt: jwt });
                    newToken = JWT.sign({ email: newUser.email, _id: newUser._id }, client_auth_1.JWT_SECRET_KEY.key);
                    newUser.jwt = newToken;
                    return [4 /*yield*/, newUser.save()];
                case 2:
                    usr = _a.sent();
                    return [2 /*return*/, done(null, usr._id)];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: 
                // const {password: hash} = user;
                // // console.log('hash: ',hash);
                // const checkpsswrd = user.comparePasswords(password, hash);
                // if(checkpsswrd){
                //    return done(null, user, { message: 1});
                // }
                return [2 /*return*/, done(null, false, { message: 'user already exists' })];
            }
        });
    }); });
    //   return done(null, { username }, { message: "Username Already Exists" });
}
function loginUserStrategy(email, password, done) {
    var _this = this;
    user_schema_1.userModel.findOne({ email: email }, function (err, user) { return __awaiter(_this, void 0, void 0, function () {
        var hash, checkpsswrd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (err) {
                        console.error(err);
                    }
                    if (!user) {
                        return [2 /*return*/, done(null, false)];
                    }
                    hash = user.password;
                    return [4 /*yield*/, user.comparePasswords(password, hash)];
                case 1:
                    checkpsswrd = _a.sent();
                    if (checkpsswrd) {
                        return [2 /*return*/, done(null, user)];
                    }
                    return [2 /*return*/, done(null, false)];
            }
        });
    }); });
    //   return done(null, { username }, { message: "Username Already Exists" });
}
passport_1.use('createUser', new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, createUserStrategy));
passport_1.use('loginUser', new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, loginUserStrategy));
