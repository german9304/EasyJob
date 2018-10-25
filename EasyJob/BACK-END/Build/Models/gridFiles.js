var mongoose = require("mongoose");
var db = require("./db-connection");
var gridFsSchema = new mongoose.Schema({
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    filename: String,
    md5: String,
    contentType: String
}, { collection: "uploads.files", versionKey: false });
