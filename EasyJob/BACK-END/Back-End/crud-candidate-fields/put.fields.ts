/*
* Http Method:  PUT
* Update  Field, Education, Experience
*/
import * as passport from "passport";
import { Router } from "express";
import {
  userEducation,
  userExperience,
  updateEducationField,
  updateExperienceField
} from "../Models/user-fields-schema";
import { updateField } from "./fields.service";
const router: Router = Router();

const eduModel = updateField(userEducation, updateEducationField);

const expModel = updateField(userExperience, updateExperienceField);

router.put(
  "/experience/:id",
  passport.authenticate("jwt", { session: false }),
  expModel
);

router.put(
  "/education/:id",
  passport.authenticate("jwt", { session: false }),
  eduModel
);

export default router;
