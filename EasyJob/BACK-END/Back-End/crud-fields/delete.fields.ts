import { Router } from "express";
import * as passport from "passport";
import { userEducation, userExperience } from "../Models/user-fields-schema";
import { deleteField } from "./fields.service";
import { responseRequest } from "../response";
import "../jwt-auth";

const router: Router = Router();

const expModel: responseRequest = deleteField(userExperience);
const eduModel: responseRequest = deleteField(userEducation);

router.delete("/experience/:id", passport.authenticate("jwt"), expModel);
router.delete("/education/:id", passport.authenticate("jwt"), eduModel);

export default router;
