import { Router } from "express";
import { userModel, createUser, findUserById } from "../Models/user-schema";
import { Response, Request, IRouter } from "express";
import { Experience, Education, Field } from "../Models/fields";
const router: Router = Router();

router.delete("/experience/:id");

router.delete("/education/:id");

export default router;
