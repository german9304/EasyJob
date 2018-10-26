import * as mongoose from "mongoose";
import { model, Schema, Document, Model } from "mongoose";
import { Fields, Field, Education, Experience, FieldModel } from "./fields";
// import db from "./db-connection";
import { User } from "../user";

const experienceSchema: Schema = new mongoose.Schema(
  {
    user: {
      _id: String
    },
    position: String,
    company: String,
    location: String,
    date: { start: String, end: String },
    description: String
  },
  { collection: "experience", versionKey: false }
);

const educationSchema: Schema = new mongoose.Schema(
  {
    user: {
      _id: String
    },
    school: String,
    degree: String,
    majorField: String,
    date: { start: String, end: String },
    description: String
  },
  { collection: "education", versionKey: false }
);

const userEducation: Model<FieldModel> = mongoose.model<FieldModel>(
  "education",
  educationSchema
);

const userExperience: Model<FieldModel> = mongoose.model<FieldModel>(
  "experience",
  experienceSchema
);

const experienceModel = ({
  user,
  position,
  company,
  location,
  date,
  description
}: Field): FieldModel => {
  return new userExperience({
    user,
    position,
    company,
    location,
    date,
    description
  });
};

const educationModel = ({
  user,
  school,
  degree,
  majorField,
  date,
  description
}: Field): FieldModel => {
  return new userEducation({
    user,
    school,
    degree,
    majorField,
    date,
    description
  });
};

const updateEducationField = (
  model: FieldModel,
  { school, degree, majorField, date, description }: Field
): FieldModel => {
  return model.set({
    school,
    degree,
    majorField,
    date,
    description
  });
};
const updateExperienceField = (
  model: FieldModel,
  { position, company, location, date, description }: Field
): FieldModel => {
  return model.set({
    position,
    company,
    location,
    date,
    description
  });
};

interface fieldFunction {
  (field: Field): FieldModel;
}
interface updateModelFunction {
  (model: FieldModel, {  }: Field): FieldModel;
}
const createCandidateField = async (
  user: User,
  field: Field,
  model: fieldFunction
): Promise<FieldModel> => {
  try {
    const { _id } = user;
    const newField: FieldModel = model(field);
    newField.user = { _id };
    console.log(newField);
    return await newField.save();
  } catch (err) {
    console.error(err);
  }
};

const user: User = {
  jwt: "1",
  email: "2",
  _id: "23"
};

const updateCandidateField = async (
  _id: string,
  field: Field,
  model: Model<FieldModel>,
  updateModel: updateModelFunction
): Promise<FieldModel> => {
  try {
    const findField: FieldModel = await model.findById(_id);
    if (findField) {
      const updatedField: FieldModel = updateModel(findField, field);
      return await updatedField.save();
    }
    return findField;
  } catch (err) {
    console.error(err);
  }
};

// const createCandidateFieldEducation = async (
//   user: User,
//   field: Field
// ): Promise<Field> => {
//   try {
//     const education: Field = educationModel(field);
//     return await education.save();
//   } catch (err) {
//     console.error(err);
//   }
// };

// const deleteCandidateField = (
//   user: User,
//   field: Field,
//   is: boolean
// ): void => {};

// const createFieldModel = ({ _id }, field: Field, is: boolean): Field => {
//   // const { _id } = user;
//   if (is) {
//     const { position, company, location, date, description } = field;
//     const user = {
//       _id
//     };
//     const modelField: Field = {
//       user,
//       position,
//       company,
//       location,
//       date,
//       description
//     } as Field;
//     experieceModel(modelField);
//   }
//   const { school, degree, majorField, date, description } = field;
//   return new userEducation({
//     user: {
//       _id
//     },
//     school,
//     degree,
//     majorField,
//     date,
//     description
//   });
// };
// const createExperience = async (
//   user,
//   fields: Experience
// ): Promise<Experience> => {
//   const { _id } = user;
//   const { position, company, location, date, description } = fields;
//   console.log(fields);
//   const experience: Experience = new userExperience({
//     user: {
//       _id
//     },
//     position,
//     company,
//     location,
//     date,
//     description
//   });

//   try {
//     const field: Experience = await experience.save();
//     return field;
//   } catch (err) {
//     console.log(err);
//   }
// };
// const editExperience = async (
//   _id: string,
//   data: Experience
// ): Promise<Experience> => {
//   //console.log("id inside: ", _id);
//   // console.log("data: ", data);
//   try {
//     const experience = await userExperience.findById(_id);
//     if (experience) {
//       const { position, company, location, date, description } = data;
//       console.log(`EXPERIENCE BEFORE: ${experience}`);
//       experience.set({
//         position,
//         company,
//         location,
//         date,
//         description
//       });
//       const resultExperience: Experience = await experience.save();
//       return resultExperience;
//       //console.log(`EXPERIENCE AFTER: ${experience}`);
//     }
//     return experience;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

// const deleteExperience = async (_id): Promise<Experience> => {
//   try {
//     const experience: Experience = await userExperience.findById(_id);
//     if (experience) {
//       userExperience.deleteOne({ _id }, err => {
//         if (err) console.error(err);
//         console.log("successful");
//       });
//     }
//     console.log(experience);
//     return experience;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const createEducation = async (user, fields: Education): Promise<Education> => {
//   const { _id } = user;
//   const { school, degree, majorField, date, description } = fields;
//   console.log(`before id ${_id}  ${JSON.stringify(user)}`);
//   const education = new userEducation({
//     user: {
//       _id
//     },
//     school,
//     degree,
//     majorField,
//     date,
//     description
//   });
//   try {
//     const field: Education = await education.save();
//     console.log(`sucess: ${field}`);
//     return field;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };
const candidateFields = async (id: string): Promise<Fields> => {
  const education: Array<Education> = await userEducation.find({
    user: { _id: `${id}` }
  });
  const experience: Array<Experience> = await userExperience.find({
    user: { _id: `${id}` }
  });
  return {
    education,
    experience
  };
};
// const getExperience = async (id: string): Promise<Experience> => {
//   try {
//     const experience: Experience = await userExperience.findById(id);
//     return experience;
//   } catch (err) {
//     console.log(err);
//   }
// };
export {
  //   experienceSchema,
  //   educationSchema,
  //   createExperience,
  //   editExperience,
  //   deleteExperience,
  //   createEducation,
  fieldFunction,
  experienceModel,
  educationModel,
  createCandidateField,
  updateCandidateField,
  updateEducationField,
  updateExperienceField,
  userEducation,
  userExperience,
  candidateFields,
  updateModelFunction
  //   getExperience
};
