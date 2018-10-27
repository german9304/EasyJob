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
import { createField, updateField, deleteField } from "./fields.service";

import "../jwt-auth";
import { Router } from "express";

const router: Router = Router();

/*
* Http Method:  GET
* GET Field, Education, Experience
*/

router.get("/experience", authenticate("jwt"));

router.get("/education", authenticate("jwt"));

router.get("/experience/:id", authenticate("jwt"));

router.get("/education/:id", authenticate("jwt"));

router.get("/fields");

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

router.delete("/experience/:id", authenticate("jwt"), deleteExperience);

router.delete("/education/:id", authenticate("jwt"), deleteEducation);

export default router;
