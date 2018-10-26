/*
*
* CRUD OPERATIONS FIELDS 
*
*/
import { Request, Response } from "express";
import {
  createCandidateField,
  updateCandidateField,
  fieldFunction,
  updateModelFunction,
  deleteCandidateField
} from "../Models/user-fields-schema";
import { FieldModel } from "../Models/fields";
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
    if (field) {
      return res.json({ field });
    } else {
      const err: string = "not found";
      return res.status(404).json({ err });
    }
  } catch (err) {
    console.error(err);
  }
};

const deleteField = (model: Model<FieldModel>) => async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { user, params } = req;
    const { id } = params;
    console.log(id);
    const deleteField: FieldModel = await deleteCandidateField(id, model);
    if (deleteField) {
      return res.json({ sucess: true });
    }
    const err: string = "not found";
    return res.status(404).json({ err });
  } catch (err) {
    console.error(err);
  }
};

const getFields = (req: Request, res: Response) => {};

export { getFields, createField, deleteField, updateField };
