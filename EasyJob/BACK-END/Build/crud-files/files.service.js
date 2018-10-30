"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gridFiles_1 = require("../Models/gridFiles");
var getFiles = function (req, res) {
    var filename = req.params.filename;
    var file = gridFiles_1.getCandidateFiles(filename);
    return file.pipe(res);
    //return res.json(filename);
};
exports.getFiles = getFiles;
var uploadFile = function (req, res) {
    var file = req.file;
    res.json(file);
};
exports.uploadFile = uploadFile;
