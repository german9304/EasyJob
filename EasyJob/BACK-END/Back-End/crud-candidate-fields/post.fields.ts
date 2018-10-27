/*
* Http Method:  POST
* Create New Field, Education, Experience
*/

import { Router } from "express";
import { educationModel, experienceModel } from "../Models/user-fields-schema";
import { createField } from "./fields.service";
import { authenticate } from "passport";
import { responseRequest } from "../response";
import "../jwt-auth";

const router: Router = Router();

const experienceField: responseRequest = createField(experienceModel);
const educationField: responseRequest = createField(educationModel);

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
