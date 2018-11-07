"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { connect, connection } from "mongoose";
var mongoose = require("mongoose");
var client_auth_1 = require("../client-auth");
mongoose.connect(client_auth_1.DATABASE_URL, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected mongoose');
});
exports.default = db;
