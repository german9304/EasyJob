import * as passport from "passport";
import { Router } from "express";
import { userModel, createUser, findUserById } from "../Models/user-schema";
import { Response, Request, IRouter } from "express";
import { Experience, Education, Field } from "../Models/fields";
import {
  userEducation,
  userExperience,
  educationModel,
  experienceModel,
  updateEducationField,
  updateExperienceField,
  updateModelFunction
} from "../Models/user-fields-schema";
import { createField, updateField } from "./fields.service";
const router: Router = Router();

/*
* Http Method:  PUT
* Update  Field, Education, Experience
*/
const eduModel = updateField(userEducation, updateEducationField);

const expModel = updateField(userExperience, updateExperienceField);

router.put("/experience/:id", passport.authenticate("jwt"), expModel);

router.put("/education/:id", passport.authenticate("jwt"), eduModel);

export default router;
