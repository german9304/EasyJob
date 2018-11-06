import * as express from 'express';
import './google-auth';
import * as passport from "passport";
import { Request, Response, IRoute } from "express";
import "./jwt-auth";
import { userModel, createUser, findUserById } from "./Models/user-schema";

import {
  candidateFields
  // createExperience,
  // editExperience,
  // deleteExperience,
  // createEducation,
  // getExperience
} from "./Models/user-fields-schema";
import { User } from "./user";
import { Experience, Education } from "./Models/fields";
const appRoutes = express();
const router = express.Router();
const JWT = passport.authenticate("jwt", { session: false });

appRoutes
  .route("/experienc")
  .get(
    async (req: Request, res: Response): Promise<Response> => {
      // console.log(req.query);
      const { id } = req.query;
      try {
        const experience: Experience;
        // = await getExperience(id);
        // console.log(id);
        //res.json(experience);
        return experience
          ? res.json(experience)
          : res.status(404).json({ notFound: "Not Found" });
      } catch (err) {
        console.log(err);
      }
    }
  )
  .post(
    JWT,
    async (req: Request, res: Response): Promise<Response> => {
      try {
        const { user, body: fields } = req;
        // console.log(`user: ${JSON.stringify(req.user)}`);
        // console.log(user);
        // console.log(`${user._id}    ${JSON.stringify(fields)}`);
        //const experience: Experience = await createExperience(user, fields);
        let experience: Experience;
        // console.log(`new experience ${experience}`);
        return res.json(experience);
      } catch (err) {
        console.log(err);
      }
    }
  )
  .put(
    JWT,
    async (req: Request, res: Response): Promise<Response> => {
      try {
        const {
          user,
          body: data,
          query: { id }
        } = req;
        const { _id } = user;
        //console.log(id);
        // console.log(`user: ${JSON.stringify(req.user)} ${_id}`);
        // console.log(user);
        // console.log(`${user._id}    ${JSON.stringify(fields)}`);
        //  const experience: Experience = await editExperience(id, data);
        let experience: Experience;
        //console.log(`edit experience ${experience}`);
        if (experience) {
          return res.json(experience);
        }
        return res.status(404).json("not found");
      } catch (err) {
        console.log(err);
      }
    }
  )
  .delete(
    JWT,
    async (req: Request, res: Response): Promise<Response> => {
      try {
        const {
          user,
          body: data,
          query: { id }
        } = req;
        const { _id } = user;
        //const experience: Experience = await deleteExperience(id);
        let experience: Experience;
        if (experience) {
          return res.json({ sucess: "sucessful deleted" });
        }
        return res.status(404).json("not found");
      } catch (err) {
        console.log(err);
      }
    }
  );

appRoutes.get(
  "/candidate",
  async (req: Request, res: Response): Promise<Response> => {
    if (req.user) {
      // console.log(req.user);
      const {
        user: { _id }
      } = req;
      //console.log(_id);
      const fields = await candidateFields(_id);
      // console.log(`fields: ${fields}`);
      return res.json(fields);
    }
    return res.status(404).send("invalid data");
  }
);

// console.log(field1);
export { appRoutes };
