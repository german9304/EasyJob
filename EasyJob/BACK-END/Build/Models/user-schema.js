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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var bycrpt = require("bcrypt");
var SALT_ROUNDS = 10;
// interface IUserModel extends IUser, Document {
//   comparePasswords(userPassword, hash): Promise<boolean>;
// }
/*
USER SCHEMA
 */
var userSchema = new mongoose.Schema({
    name: String,
    candidate: Boolean,
    employer: Boolean,
    email: String,
    googleId: String,
    password: String,
    jwt: String
}, { collection: "users", versionKey: false });
userSchema.pre("save", function () {
    return __awaiter(this, void 0, void 0, function () {
        var user, gen, bcrypthash, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = this;
                    if (!user.password) return [3 /*break*/, 5];
                    if (!(user.isModified("password") || user.isNew)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, bycrpt.genSalt(SALT_ROUNDS)];
                case 2:
                    gen = _a.sent();
                    return [4 /*yield*/, bycrpt.hash(user.password, gen)];
                case 3:
                    bcrypthash = _a.sent();
                    user.password = bcrypthash;
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log("res: ", err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
});
/*
Compare Passwords
*/
userSchema.methods.comparePasswords = function (userPassword, hash) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bycrpt.compare(userPassword, hash)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
var userModel = mongoose.model("user", userSchema);
exports.userModel = userModel;
var findGoogleUser = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var user, _id, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel.findOne({ googleId: id })];
            case 1:
                user = _a.sent();
                if (user) {
                    _id = user._id;
                    // console.log(_id);
                    return [2 /*return*/, _id];
                }
                return [2 /*return*/, user];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findGoogleUser = findGoogleUser;
var createUserGoogle = function (_a) {
    var googleId = _a.googleId, email = _a.email, jwt = _a.jwt;
    return new userModel({
        email: email,
        googleId: googleId,
        jwt: jwt
    });
};
exports.createUserGoogle = createUserGoogle;
var createUser = function (_a) {
    var email = _a.email, password = _a.password, jwt = _a.jwt;
    return new userModel({
        email: email,
        password: password,
        jwt: jwt
    });
};
exports.createUser = createUser;
var findUserById = function (_a) {
    var _id = _a._id;
    return __awaiter(_this, void 0, void 0, function () {
        var usr;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, userModel.findById(_id)];
                case 1:
                    usr = _b.sent();
                    return [2 /*return*/, usr];
            }
        });
    });
};
exports.findUserById = findUserById;
var findUserName = function (_a) {
    var email = _a.email, password = _a.password;
    return __awaiter(_this, void 0, void 0, function () {
        var usr, hash_1, res, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, userModel.findOne({ email: email })];
                case 1:
                    usr = _b.sent();
                    if (!usr) return [3 /*break*/, 3];
                    hash_1 = usr.password;
                    return [4 /*yield*/, usr.comparePasswords(password, hash_1)];
                case 2:
                    res = _b.sent();
                    console.log(usr, res);
                    return [2 /*return*/, {
                            usr: usr,
                            res: res
                        }];
                case 3:
                    console.log("error not user found");
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _b.sent();
                    console.log("res: ", err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
