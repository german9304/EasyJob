"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cookieSession = require("cookie-session");
var client_auth_1 = require("./client-auth");
require("./create-account-auth");
require("./jwt-auth");
var jobs_Schema_1 = require("./Models/jobs-Schema");
var passport = require("passport");
var passport_1 = require("passport");
require("./Models/db-connection");
var auth_server_1 = require("./auth-server");
var crud_operations_fields_1 = require("./crud-candidate-fields/crud.operations.fields");
require("./Models/file-schema");
var files_server_1 = require("./crud-files/files.server");
var app = express();
app.use(cookieSession({
    name: "session",
    keys: [client_auth_1.SECRET_KEY.key],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", auth_server_1.default);
app.use("/api/fields", crud_operations_fields_1.default);
app.use("/api/files", files_server_1.default);
app.get("/", function (req, res) {
    res.send("home");
});
app.get("/test", function (req, res) {
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
        res.json(data);
    });
});
app.get("/jwt", passport_1.authenticate("jwt", { session: false }), function (req, res) {
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
