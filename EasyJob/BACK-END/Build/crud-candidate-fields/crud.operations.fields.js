"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_fields_schema_1 = require("../Models/user-fields-schema");
var passport_1 = require("passport");
var fields_service_1 = require("./fields.service");
require("../jwt-auth");
var express_1 = require("express");
var router = express_1.Router();
/*
* Http Method:  GET
* GET Field, Education, Experience
*/
router.get("/experience", passport_1.authenticate("jwt"));
router.get("/education", passport_1.authenticate("jwt"));
router.get("/experience/:id", passport_1.authenticate("jwt"));
router.get("/education/:id", passport_1.authenticate("jwt"));
router.get("/fields");
/*
* Http Method:  POST
* Create New Field, Education, Experience
*/
var createExperience = fields_service_1.createField(user_fields_schema_1.experienceModel);
var createEducation = fields_service_1.createField(user_fields_schema_1.educationModel);
router.post("/experience", passport_1.authenticate("jwt", { session: false }), createExperience);
router.post("/education", passport_1.authenticate("jwt", { session: false }), createEducation);
/*
* Http Method:  PUT
* Update  Field, Education, Experience
*/
var updateExperience = fields_service_1.updateField(user_fields_schema_1.userExperience, user_fields_schema_1.updateExperienceField);
var updateEducation = fields_service_1.updateField(user_fields_schema_1.userEducation, user_fields_schema_1.updateEducationField);
router.put("/experience/:id", passport_1.authenticate("jwt", { session: false }), updateExperience);
router.put("/education/:id", passport_1.authenticate("jwt", { session: false }), updateEducation);
/*
* Http Method:  DELETE
* Delete Field, Education, Experience
*/
var deleteExperience = fields_service_1.deleteField(user_fields_schema_1.userExperience);
var deleteEducation = fields_service_1.deleteField(user_fields_schema_1.userEducation);
router.delete("/experience/:id", passport_1.authenticate("jwt"), deleteExperience);
router.delete("/education/:id", passport_1.authenticate("jwt"), deleteEducation);
exports.default = router;
