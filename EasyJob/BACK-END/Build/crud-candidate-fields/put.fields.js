"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Http Method:  PUT
* Update  Field, Education, Experience
*/
var passport = require("passport");
var express_1 = require("express");
var user_fields_schema_1 = require("../Models/user-fields-schema");
var fields_service_1 = require("./fields.service");
var router = express_1.Router();
var eduModel = fields_service_1.updateField(user_fields_schema_1.userEducation, user_fields_schema_1.updateEducationField);
var expModel = fields_service_1.updateField(user_fields_schema_1.userExperience, user_fields_schema_1.updateExperienceField);
router.put("/experience/:id", passport.authenticate("jwt", { session: false }), expModel);
router.put("/education/:id", passport.authenticate("jwt", { session: false }), eduModel);
exports.default = router;
