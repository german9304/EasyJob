import * as express from "express";
import "./google-auth";
import * as passport from "passport";
import { Request, Response } from "express";
import passportJWT from "./jwt-auth";
import { userModel, createUser, findUserById } from "./Database/user-schema";
import {
  candidateFields,
  createExperience,
  editExperience,
  deleteExperience,
  createEducation,
  getExperience
} from "./Database/user-fields-schema";
import { Experience, Education } from "./Database/fields";
const router = express.Router();
const appRoutes = express();
const JWT = passport.authenticate("jwt", { session: false });

appRoutes
  .route("/experience")
  .get(
    async (req: Request, res: Response): Promise<Response> => {
      // console.log(req.query);
      const { id } = req.query;
      try {
        const experience: Experience = await getExperience(id);
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
        console.log(`${user._id}    ${JSON.stringify(fields)}`);
        const experience: Experience = await createExperience(user, fields);
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
        const experience: Experience = await editExperience(id, data);
        console.log(`edit experience ${experience}`);
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
        const experience = await deleteExperience(id);
        return res.json({});
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

export default appRoutes;
