import { Router } from "express";
import { userModel, createUser, findUserById } from "../Models/user-schema";
import { Response, Request, IRouter } from "express";
import { Experience, Education, Field } from "../Models/fields";
import {
  userEducation,
  educationModel,
  experienceModel
} from "../Models/user-fields-schema";
import { createField } from "./fields.service";
import { authenticate } from "passport";
import "../jwt-auth";

const router: Router = Router();

const experienceField = createField(experienceModel);
const educationField = createField(educationModel);
/*
* Http Method:  POST
* Create New Field, Education, Experience
*/
router.post(
  "/experience",
  authenticate("jwt", { session: false }),
  experienceField
);

router.post(
  "/education",
  authenticate("jwt", { session: false }),
  educationField
);

export default router;
