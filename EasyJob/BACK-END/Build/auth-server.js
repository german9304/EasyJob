"use strict";
/*
 Authentication Routes
*/
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const googleAuth = require("./google-auth");
// const passport = require("passport");
// const router = express.Router();
// const {
//   userModel,
//   createUser,
//   findUserById
// } = require("./Database/user-schema");
// router.get("/google", (req, res, next) => {
//   console.log(req.query);
//   next();
// });
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"]
//   })
// );
// router.get("/google/redirect", passport.authenticate("google"), function(
//   req,
//   res,
//   next
// ) {
//     console.log("req user: ", req.user);
//   res.redirect("http://localhost:4200/");
// });
// router.post("/create/user", passport.authenticate("createUser"), function(
//   req,
//   res
// ) {
//   console.log(req.authInfo)
//   const { user: id } = req;
//   const usr = findUserById(id);
//   usr.then(data => {
//     const { _id, email, jwt } = data;
//     res.json({ user: { _id, email, jwt } });
//   });
// });
// router.post("/login", passport.authenticate("loginUser"), (req, res) => {
//   console.log(req.body);
//   try {
//     const { email, jwt } = req.user;
//     console.log("login: ", req.user);
//     res.json({ user: { email, jwt, auth: true } });
//   } catch (error) {
//     console.log(error);
//   }
// });
// module.exports = router;
/*
 Authentication Routes
*/
var express = require("express");
var passport = require("passport");
require("./google-auth");
var router = express.Router();
var _a = require("./Database/user-schema"), userModel = _a.userModel, createUser = _a.createUser, findUserById = _a.findUserById;
router.get("/google", function (req, res, next) {
    console.log(req.query);
    next();
});
router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
router.get("/google/redirect", passport.authenticate("google"), function (req, res, next) {
    //console.log("redirect out");
    //  console.log("req user: ", req.user);
    res.redirect("http://localhost:4200/");
});
router.post("/create/user", passport.authenticate("createUser"), function (req, res) {
    // console.log(req.authInfo);
    var id = req.user;
    var usr = findUserById(id);
    usr.then(function (data) {
        var _id = data._id, email = data.email, jwt = data.jwt;
        res.json({ user: { _id: _id, email: email, jwt: jwt } });
    });
});
router.post("/login", passport.authenticate("loginUser"), function (req, res) {
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
