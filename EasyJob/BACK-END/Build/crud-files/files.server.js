"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var files_service_1 = require("./files.service");
var file_schema_1 = require("../Models/file-schema");
var passport_1 = require("passport");
var multer = require("multer");
require("../jwt-auth");
var router = express_1.Router();
var upload = multer({ storage: file_schema_1.fileStorage });
router.get("/", files_service_1.getFiles);
router.get("/resume", files_service_1.getResume);
router.post("/upload", passport_1.authenticate("jwt", { session: false }), upload.single("files"), files_service_1.uploadFile);
exports.default = router;
