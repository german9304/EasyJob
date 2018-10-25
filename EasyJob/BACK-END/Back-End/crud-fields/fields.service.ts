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
  fieldFunction
} from "../Models/user-fields-schema";
import {
  Fields,
  Field,
  Education,
  Experience,
  FieldModel
} from "../Models/fields";
import { User } from "../user";

const createField = (model: fieldFunction) => async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { user, body: field } = req;
    console.log(field);
    console.log(user);
    const newField: Field = await createCandidateField(user, field, model);
    return res.json({ field });
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
};

const deleteField = (model: fieldFunction) => (
  req: Request,
  res: Response
) => {};

const updateField = (model: fieldFunction) => (
  req: Request,
  res: Response
) => {};

const getFields = (req: Request, res: Response) => {};

export { getFields, createField, deleteField, updateField };
