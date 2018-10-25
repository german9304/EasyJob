"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_fields_schema_1 = require("../Models/user-fields-schema");
var fields_service_1 = require("./fields.service");
var passport_1 = require("passport");
require("../jwt-auth");
var router = express_1.Router();
var experienceField = fields_service_1.createField(user_fields_schema_1.experienceModel);
var educationField = fields_service_1.createField(user_fields_schema_1.educationModel);
/*
* Http Method:  Post
* Create New Field, Education, Experience
*/
router.post("/experience", passport_1.authenticate("jwt", { session: false }), experienceField);
router.post("/education", passport_1.authenticate("jwt", { session: false }), educationField);
exports.default = router;
