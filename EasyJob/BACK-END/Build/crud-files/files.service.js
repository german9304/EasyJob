"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFiles = function (req, res) { };
exports.getFiles = getFiles;
var uploadFile = function (req, res) {
    var file = req.file;
    res.json(file);
};
exports.uploadFile = uploadFile;
