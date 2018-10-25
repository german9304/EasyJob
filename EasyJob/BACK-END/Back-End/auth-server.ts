/*
 Authentication Routes
*/

import { Request, Response, NextFunction } from "express";
import { authenticate } from "passport";

import "./google-auth";
import { Router } from "express";
const router: Router = Router();

import { userModel, createUser, findUserById } from "./Models/user-schema";

router.get(
  "/google",
  (req: Request, res: Response, next): void => {
    console.log(req.query);
    next();
  }
);

router.get(
  "/google",
  authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/redirect",
  authenticate("google"),
  (req: Request, res: Response, next: NextFunction): void => {
    //console.log("redirect out");
    //  console.log("req user: ", req.user);
    res.redirect("http://localhost:4200/");
    // res.redirect("/");
  }
);

router.post(
  "/create/user",
  authenticate("createUser"),
  (req: Request, res: Response): void => {
    // console.log(req.authInfo);
    const { user: id } = req;
    const usr = findUserById(id);
    usr.then(data => {
      const { _id, email, jwt } = data;
      res.json({ user: { _id, email, jwt } });
    });
  }
);

router.post(
  "/login",
  authenticate("loginUser"),
  (req: Request, res: Response): void => {
    // console.log(req.body);
    try {
      const { email, jwt } = req.user;
      // console.log("login: ", req.user);
      res.json({ user: { email, jwt, auth: true } });
    } catch (error) {
      console.log(error);
    }
  }
);

export default router;
