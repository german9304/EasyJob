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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var GOOGLE_CLIENT = require("./client-auth").GOOGLE_CLIENT;
var passport = require("passport");
var jwt = require("jsonwebtoken");
var JWT_SECRET_KEY = require("./client-auth").JWT_SECRET_KEY;
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var _a = require("./Database/user-schema"), userModel = _a.userModel, findGoogleUser = _a.findGoogleUser, createUserGoogle = _a.createUserGoogle;
passport.serializeUser(function (userId, done) {
    done(null, userId);
});
passport.deserializeUser(function (id, done) {
    userModel.findById(id).then(function (user) {
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
var candidate_employer = function (req, res, next) {
    var query = req.query;
    req.session = query;
    next();
};
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT.client_id,
    clientSecret: GOOGLE_CLIENT.client_secret,
    callbackURL: GOOGLE_CLIENT.redirect_uris[0]
}, function (accessToken, refreshToken, profile, done) {
    return __awaiter(this, void 0, void 0, function () {
        var id, displayName, emails, email, googleUser, googleid, user, addedUser, token, newuser, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = profile.id, displayName = profile.displayName, emails = profile.emails;
                    email = emails[0].value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, findGoogleUser(id)];
                case 2:
                    googleUser = _a.sent();
                    if (!!googleUser) return [3 /*break*/, 4];
                    googleid = id;
                    user = {
                        id: id,
                        email: email
                    };
                    addedUser = createUserGoogle(user);
                    token = jwt.sign({ addedUser: addedUser }, JWT_SECRET_KEY.key);
                    addedUser.jwt = token;
                    return [4 /*yield*/, addedUser.save()];
                case 3:
                    newuser = _a.sent();
                    return [2 /*return*/, done(null, newuser)];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, done(null, false)];
            }
        });
    });
}));
