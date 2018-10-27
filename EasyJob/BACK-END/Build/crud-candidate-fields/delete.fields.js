"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Http Method:  DELETE
* Delete Field, Education, Experience
*/
var express_1 = require("express");
var passport = require("passport");
var user_fields_schema_1 = require("../Models/user-fields-schema");
var fields_service_1 = require("./fields.service");
require("../jwt-auth");
var router = express_1.Router();
var expModel = fields_service_1.deleteField(user_fields_schema_1.userExperience);
var eduModel = fields_service_1.deleteField(user_fields_schema_1.userEducation);
router.delete("/experience/:id", passport.authenticate("jwt"), expModel);
router.delete("/education/:id", passport.authenticate("jwt"), eduModel);
exports.default = router;
