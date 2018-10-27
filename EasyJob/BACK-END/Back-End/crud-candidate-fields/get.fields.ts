import { Router } from "express";
import { userModel, createUser, findUserById } from "../Models/user-schema";
import { Response, Request, IRouter } from "express";
import { Experience, Education, Field } from "../Models/fields";
import { authenticate } from "passport";
const router: Router = Router();

router.get("/experience", authenticate("jwt"));

router.get("/education", authenticate("jwt"));

router.get("/experience/:id", authenticate("jwt"));

router.get("/education/:id", authenticate("jwt"));

router.get("/fields");

export default router;
