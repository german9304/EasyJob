"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var express = require("express");
var cookieSession = require("cookie-session");
// import {SECRET_KEY } from "./client-auth";
var client_auth_1 = require("./client-auth");
// const cookieSession = require("cookie-session");
// const { SECRET_KEY } = require("./client-auth");
// const localAuth = require("./create-account-auth");
require("./create-account-auth");
// const flash = require("connect-flash");
// const jwtAuth = require("./jwt-auth");
require("./jwt-auth");
var jobs_Schema_1 = require("./Database/jobs-Schema");
var passport = require("passport");
// const passport = require("passport");
var app = express();
// const auth = require("./auth-server");
var auth_server_1 = require("./auth-server");
var user_fields_server_1 = require("./user-fields-server");
app.use(cookieSession({
    name: "session",
    keys: [client_auth_1.SECRET_KEY.key],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
// require("./local-auth")(passport);
// app.use(flash());
app.use("/auth", auth_server_1.default);
app.use("/api/fields", user_fields_server_1.default);
//app.use(express.static("../dist/EasyJob"));
app.get("/", function (req, res) {
    res.send("home");
});
app.get("/test", function (req, res) {
    //console.log(req);
    res.send("middleware");
});
app.get("/user", function (req, res) {
    // console.log(req.user);
    // const { user } = req;
    if (req.user) {
        try {
            var _a = req.user, email = _a.email, jwt = _a.jwt;
            var user = {
                email: email,
                jwt: jwt,
                auth: true
            };
            res.json(user);
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        res.json(null);
    }
});
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
app.post("/api", function (req, res) {
    var user = req.body;
    // console.log(user);
    res.json(user);
});
app.get("/api/candidate/jobs", function (req, res) {
    var query = req.query;
    var listjobs = jobs_Schema_1.jobSearch(query);
    listjobs.then(function (data) {
        // console.log(data);
        res.json(data);
    });
    // console.log("query: ", jobSearch);
});
app.get("/jwt", passport.authenticate("jwt", { session: false }), function (req, res) {
    // console.log(req.user);
    res.send("data");
});
app.post("/api/post/job", function (req, res) { });
app.get("/api/job/categories", function (req, res) {
    var search = req.query.search;
    var searchRegex = new RegExp("^" + search);
    jobs_Schema_1.categoryModel.find({ category: { $regex: searchRegex } }, function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.json(data);
    });
});
app.get("/api/categories", function (req, res) {
    jobs_Schema_1.categoryModel.find({}, function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.json(data);
    });
});
app.get("*", function (req, res) {
    res.redirect("/");
});
app.listen(3000, function () { return console.log("app listening on port 3000!"); });
