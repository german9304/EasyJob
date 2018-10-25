"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var client_auth_1 = require("../client-auth");
mongoose_1.connect(client_auth_1.DATABASE_URL, { useNewUrlParser: true });
var db = mongoose_1.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("connected mongoose");
});
exports.default = db;
