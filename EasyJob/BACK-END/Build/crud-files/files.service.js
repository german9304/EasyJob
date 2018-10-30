"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gridFiles_1 = require("../Models/gridFiles");
var getFiles = function (req, res) {
    var files = gridFiles_1.getCandidateFiles();
    files.then(function (files) { return console.log(files); });
    return res.json({});
};
exports.getFiles = getFiles;
var uploadFile = function (req, res) {
    var file = req.file;
    res.json(file);
};
exports.uploadFile = uploadFile;
