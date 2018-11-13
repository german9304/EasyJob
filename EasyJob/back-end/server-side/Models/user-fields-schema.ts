// import * as mongoose from "mongoose";
import { model, Schema, Document, Model } from 'mongoose';
import { Fields, Field, Education, Experience, FieldModel } from './fields';
// import db from "./db-connection";
import { User } from '../user';
import { ObjectId } from 'mongodb';
import { getCandidateResume } from './file-schema';

const experienceSchema: Schema = new Schema(
  {
    user: {
      _id: String,
    },
    position: String,
    company: String,
    location: String,
    date: { start: String, end: String },
    description: String,
  },
  { collection: 'experience', versionKey: false },
);

const educationSchema: Schema = new Schema(
  {
    user: {
      _id: String,
    },
    school: String,
    degree: String,
    majorField: String,
    date: { start: String, end: String },
    description: String,
  },
  { collection: 'education', versionKey: false },
);

const userEducation: Model<FieldModel> = model<FieldModel>(
  'education',
  educationSchema,
);

const userExperience: Model<FieldModel> = model<FieldModel>(
  'experience',
  experienceSchema,
);

const experienceModel = ({
  user,
  position,
  company,
  location,
  date,
  description,
}: Field): FieldModel => {
  return new userExperience({
    user,
    position,
    company,
    location,
    date,
    description,
  });
};

const educationModel = ({
  user,
  school,
  degree,
  majorField,
  date,
  description,
}: Field): FieldModel => {
  return new userEducation({
    user,
    school,
    degree,
    majorField,
    date,
    description,
  });
};

const updateEducationField = (
  model: FieldModel,
  { school, degree, majorField, date, description }: Field,
): FieldModel => {
  return model.set({
    school,
    degree,
    majorField,
    date,
    description,
  });
};
const updateExperienceField = (
  model: FieldModel,
  { position, company, location, date, description }: Field,
): FieldModel => {
  return model.set({
    position,
    company,
    location,
    date,
    description,
  });
};

interface FieldFunction {
  (field: Field): FieldModel;
}
interface UpdateModelFunction {
  (model: FieldModel, {  }: Field): FieldModel;
}

/*
*  Create field
*
*/
const createCandidateField = async (
  user: User,
  field: Field,
  model: FieldFunction,
): Promise<FieldModel> => {
  try {
    const { _id } = user;
    const newField: FieldModel = model(field);
    newField.user = { _id };
    // console.log(newField);
    return await newField.save();
  } catch (err) {
    console.error(err);
  }
};

/*
*  Update  field
*
*/
const updateCandidateField = async (
  id: string,
  field: Field,
  model: Model<FieldModel>,
  updateModel: UpdateModelFunction,
): Promise<FieldModel> => {
  try {
    const findField: FieldModel = await model.findById(id);
    if (findField) {
      const updatedField: FieldModel = updateModel(findField, field);
      return await updatedField.save();
    }
    return findField;
  } catch (err) {
    console.error(err);
  }
};

/*
*  Error Checking when delete field
*
*/
const err: (err: any) => void = (err) => {
  if (err) console.error(err);
  console.log('successful');
};

/*
*  Delete  field
*
*/
const deleteCandidateField = async (id: string, model: Model<FieldModel>) => {
  try {
    const findField: FieldModel = await model.findById(id);
    if (findField) {
      model.deleteOne({ _id: id }, err);
    }
    return findField;
  } catch (err) {
    console.error(err);
  }
};

const candidateFields = async (id: string): Promise<Fields> => {
  const education: Education[] = await userEducation.find({
    user: { _id: `${id}` },
  });
  const experience: Experience[] = await userExperience.find({
    user: { _id: `${id}` },
  });
  const fileInfo = await getCandidateResume(id);

  return {
    education,
    experience,
    fileInfo,
  };
};

const candidateFieldById = async (
  id: string = '',
  model: Model<FieldModel>,
): Promise<Field> => {
  try {
    const field: Field = await model.findById(id);
    return field;
  } catch (err) {
    console.log(err);
  }
};

const candidateField = async (
  model: Model<FieldModel>,
): Promise<Field[]> => {
  try {
    const field: Field[] = await model.find({});
    return field;
  } catch (err) {
    console.error(err);
  }
};
export {
  FieldFunction,
  experienceModel,
  educationModel,
  createCandidateField,
  deleteCandidateField,
  updateCandidateField,
  updateEducationField,
  updateExperienceField,
  userEducation,
  userExperience,
  candidateFields,
  UpdateModelFunction,
  candidateFieldById,
  candidateField,
};
