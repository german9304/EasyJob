"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require("mongoose");
var mongoose = require("mongoose");
var gridFsSchema = new mongoose.Schema({
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    filename: String,
    md5: String,
    contentType: String
}, { collection: "uploads.files", versionKey: false });
