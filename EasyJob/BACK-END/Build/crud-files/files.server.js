"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var files_service_1 = require("./files.service");
var router = express_1.Router();
router.get("/", files_service_1.getFiles);
router.post("/upload", files_service_1.uploadFile);
exports.default = router;
