"use strict";
/*
 Authentication Routes
*/
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = require("passport");
require("./google-auth");
var express_1 = require("express");
var router = express_1.Router();
var user_schema_1 = require("./Models/user-schema");
router.get("/google", function (req, res, next) {
    console.log(req.query);
    next();
});
router.get("/google", passport_1.authenticate("google", {
    scope: ["profile", "email"]
}));
router.get("/google/redirect", passport_1.authenticate("google"), function (req, res, next) {
    //console.log("redirect out");
    //  console.log("req user: ", req.user);
    res.redirect("http://localhost:4200/");
    // res.redirect("/");
});
router.post("/create/user", passport_1.authenticate("createUser"), function (req, res) {
    // console.log(req.authInfo);
    var id = req.user;
    var usr = user_schema_1.findUserById(id);
    usr.then(function (data) {
        var _id = data._id, email = data.email, jwt = data.jwt;
        res.json({ user: { _id: _id, email: email, jwt: jwt } });
    });
});
router.post("/login", passport_1.authenticate("loginUser"), function (req, res) {
    // console.log(req.body);
    try {
        var _a = req.user, email = _a.email, jwt = _a.jwt;
        // console.log("login: ", req.user);
        res.json({ user: { email: email, jwt: jwt, auth: true } });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;
