"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require("mongoose");
var mongoose = require("mongoose");
var crypto_1 = require("crypto");
var path_1 = require("path");
var GridFsStorage = require("multer-gridfs-storage");
var db_connection_1 = require("./db-connection");
var mongodb_1 = require("mongodb");
var gridFsSchema = new mongoose.Schema({
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    filename: String,
    md5: String,
    contentType: String
}, { collection: "uploads.files", versionKey: false });
var bucketName;
db_connection_1.default.once("open", function () {
    bucketName = new mongodb_1.GridFSBucket(db_connection_1.default.db, {
        bucketName: "uploads"
    });
    console.log("connction open");
});
var storage = new GridFsStorage({
    db: db_connection_1.default,
    file: function (req, file) {
        return new Promise(function (resolve, reject) {
            crypto_1.randomBytes(16, function (err, buf) {
                if (err) {
                    return reject(err);
                }
                var filename = "" + buf.toString("hex") + path_1.extname(file.originalname);
                var fileInfo = {
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
});
var gridFsFiles = mongoose.model("uploads", gridFsSchema);
var getFiles = function (_a) {
    var fileName = _a.fileName;
    var file = bucketName.openDownloadStreamByName(fileName);
};
