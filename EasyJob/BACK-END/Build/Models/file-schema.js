"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
    metadata: {
        user: {
            _id: String
        }
    },
    originalname: String,
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
var gridFsFiles = mongoose.model("uploads", gridFsSchema);
var fileStorage = new GridFsStorage({
    db: db_connection_1.default,
    file: function (req, file) {
        return new Promise(function (resolve, reject) {
            crypto_1.randomBytes(16, function (err, buf) {
                if (err) {
                    return reject(err);
                }
                var originalName = file.originalname;
                var filename = "" + buf.toString("hex") + path_1.extname(originalName);
                //console.log(file);
                var user = req.user;
                var _id = user._id;
                // console.log(user);
                var fileInfo = {
                    filename: filename,
                    metadata: {
                        user: { _id: _id },
                        originalName: originalName
                    },
                    bucketName: "uploads"
                };
                console.log(fileInfo);
                resolve(fileInfo);
            });
        });
    }
});
exports.fileStorage = fileStorage;
var getCandidateFiles = function () { return __awaiter(_this, void 0, void 0, function () {
    var getAllFiles;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, gridFsFiles.find()];
            case 1:
                getAllFiles = _a.sent();
                return [2 /*return*/, getAllFiles];
        }
    });
}); };
exports.getCandidateFiles = getCandidateFiles;
var getCandidateResume = function (_id) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, gridFsFiles.findOne({
                    metadata: { user: { _id: "" + _id } }
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getCandidateResume = getCandidateResume;
var getCandidateFile = function (_id) { return __awaiter(_this, void 0, void 0, function () {
    var gridFile, filename, file, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(_id);
                return [4 /*yield*/, gridFsFiles.findOne({
                        metadata: { user: { _id: _id } }
                    })];
            case 1:
                gridFile = _a.sent();
                console.log(gridFile);
                if (gridFile) {
                    filename = gridFile.filename;
                    file = bucketName.openDownloadStreamByName(filename);
                    return [2 /*return*/, file];
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCandidateFile = getCandidateFile;
