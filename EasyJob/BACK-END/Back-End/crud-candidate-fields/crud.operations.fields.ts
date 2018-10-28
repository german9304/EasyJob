import {
  educationModel,
  experienceModel,
  userEducation,
  userExperience,
  updateEducationField,
  updateExperienceField
} from "../Models/user-fields-schema";

import { authenticate } from "passport";
import { responseRequest } from "../response";
import {
  createField,
  updateField,
  deleteField,
  getCandidateFields,
  getFieldById,
  getField
} from "./fields.service";

import "../jwt-auth";
import { Router } from "express";

const router: Router = Router();

/*
* Http Method:  GET
* GET Field, Education, Experience
*/

const experienceFieldById: responseRequest = getFieldById(userExperience);

const educationFieldById: responseRequest = getFieldById(userEducation);

const experienceField: responseRequest = getField(userExperience);

const educationField: responseRequest = getField(userEducation);

/*
* Get all experiences
*/
router.get("/experience", experienceField);

/*
* Get all educations
*/
router.get("/education", educationField);

router.get("/experience/:id", experienceFieldById);

router.get("/education/:id", educationFieldById);

router.get("/candidate/experiences", authenticate("jwt", { session: false }));

router.get("/candidate/educations", authenticate("jwt", { session: false }));

router.get("/candidate", getCandidateFields);

/*
* Http Method:  POST
* Create New Field, Education, Experience
*/

const createExperience: responseRequest = createField(experienceModel);

const createEducation: responseRequest = createField(educationModel);

router.post(
  "/experience",
  authenticate("jwt", { session: false }),
  createExperience
);

router.post(
  "/education",
  authenticate("jwt", { session: false }),
  createEducation
);

/*
* Http Method:  PUT
* Update  Field, Education, Experience
*/

const updateExperience = updateField(userExperience, updateExperienceField);

const updateEducation = updateField(userEducation, updateEducationField);

router.put(
  "/experience/:id",
  authenticate("jwt", { session: false }),
  updateExperience
);

router.put(
  "/education/:id",
  authenticate("jwt", { session: false }),
  updateEducation
);

/*
* Http Method:  DELETE
* Delete Field, Education, Experience
*/
const deleteExperience: responseRequest = deleteField(userExperience);

const deleteEducation: responseRequest = deleteField(userEducation);

router.delete(
  "/experience/:id",
  authenticate("jwt", { session: false }),
  deleteExperience
);

router.delete(
  "/education/:id",
  authenticate("jwt", { session: false }),
  deleteEducation
);

export default router;
