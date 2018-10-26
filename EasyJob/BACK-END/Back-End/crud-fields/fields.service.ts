/*
*
* CRUD OPERATIONS FIELDS 
*
*/
import { Request, Response } from "express";
import {
  createCandidateField,
  updateCandidateField,
  userEducation,
  userExperience,
  experienceModel,
  educationModel,
  fieldFunction,
  updateModelFunction
} from "../Models/user-fields-schema";
import {
  Fields,
  Field,
  Education,
  Experience,
  FieldModel
} from "../Models/fields";
import { User } from "../user";
import { Model } from "mongoose";

const createField = (model: fieldFunction) => async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { user, body } = req;
    const field: FieldModel = await createCandidateField(user, body, model);
    return res.json({ field });
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
};

const updateField = (
  model: Model<FieldModel>,
  updateFunction: updateModelFunction
) => async (req: Request, res: Response): Promise<Response> => {
  try {
    const { user, body, params } = req;
    const { id } = params;
    const field: FieldModel = await updateCandidateField(
      id,
      body,
      model,
      updateFunction
    );
    //console.log(body);
    if (field) {
      return res.json({ field });
    } else {
      return res.status(404).json({ "not found": "not found" });
    }
  } catch (err) {
    console.error(err);
  }
};

const deleteField = (model: fieldFunction) => (
  req: Request,
  res: Response
) => {};

const getFields = (req: Request, res: Response) => {};

export { getFields, createField, deleteField, updateField };
