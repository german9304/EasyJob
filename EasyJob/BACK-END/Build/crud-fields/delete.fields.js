"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.delete("/experience/:id");
router.delete("/education/:id");
exports.default = router;
