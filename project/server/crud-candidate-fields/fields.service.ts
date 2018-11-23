/*
*
* CRUD OPERATIONS FIELDS
*
*/
import { Request, Response, Router } from 'express';
import {
  createCandidateField,
  updateCandidateField,
  FieldFunction,
  UpdateModelFunction,
  deleteCandidateField,
  candidateFields,
  candidateFieldById,
  candidateField,
} from '../Models/user-fields-schema';
import { FieldModel, Field } from '../Models/fields';
// import { Router } from "express";
import { Model } from 'mongoose';
import { User } from '../user';

const createField = (model: FieldFunction) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { user, body } = req;
    const field: FieldModel = await createCandidateField(user, body, model);
    return res.json(field);
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
};

const updateField = (
  model: Model<FieldModel>,
  updateFunction: UpdateModelFunction,
) => async (req: Request, res: Response): Promise<Response> => {
  try {
    const { user, body, params } = req;
    const { id } = params;
    const field: FieldModel = await updateCandidateField(
      id,
      body,
      model,
      updateFunction,
    );
    if (field) {
      return res.json(field);
    }
    const err: string = 'not found';
    return res.status(404).json({ err });
  } catch (err) {
    console.error(err);
  }
};

const deleteField = (model: Model<FieldModel>) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { params } = req;
    const { id } = params;
    console.log(id);
    const deleteField: FieldModel = await deleteCandidateField(id, model);
    if (deleteField) {
      return res.json({ sucess: true });
    }
    const err: string = 'not found';
    return res.status(404).json({ err });
  } catch (err) {
    console.error(err);
  }
};

const getCandidateFields = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    if (req.user) {
      const { user } = req;
      const { _id } = user;
      // console.log(user);
      const fields = await candidateFields(_id);
      if (fields) {
        const { education, experience, fileInfo } = fields;
        return res.json({ education, experience, fileInfo });
      }
    }
    const err: string = 'not found';
    return res.status(404).json({ err });
  } catch (err) {
    console.error(err);
  }
};

const getFieldById = (model: Model<FieldModel>) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { id } = req.params;
    // console.log(id);
    const field: Field = await candidateFieldById(id, model);
    if (field) {
      return res.json(field);
    }
    const err: string = 'not found';
    return res.status(404).json({ err });
  } catch (err) {
    console.error(err);
  }
};

const getField = (model: Model<FieldModel>) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const field: Field[] = await candidateField(model);
    return res.json(field);
  } catch (err) {
    console.error(err);
  }
};

export {
  getFieldById,
  getCandidateFields,
  createField,
  deleteField,
  updateField,
  getField,
};