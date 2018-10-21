import * as mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";
import "./db-connection";

interface Experience extends Document {
  user: {
    _id: String;
  };
  position: String;
  company: String;
  location: String;
  date: { start: String; end: String };
  description: String;
}

interface Education extends Document {
  user: {
    _id: String;
  };
  school: String;
  degree: String;
  majorField: String;
  date: { start: String; end: String };
  description: String;
}

interface Fields {
  education: Array<Education>;
  experience: Array<Experience>;
}
const experienceSchema: Schema = new Schema(
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

const educationSchema = new Schema(
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

const userEducation: Model<Education> = mongoose.model<Education>(
  "education",
  educationSchema
);

const userExperience: Model<Experience> = mongoose.model<Experience>(
  "experience",
  experienceSchema
);

const createExperience = async (
  user,
  fields: Experience
): Promise<Experience> => {
  const { _id } = user;
  const { position, company, location, date, description } = fields;
  console.log(fields);
  const experience: Experience = new userExperience({
    user: {
      _id
    },
    position,
    company,
    location,
    date,
    description
  });

  try {
    const field = await experience.save();
    return field;
  } catch (err) {
    console.log(err);
  }
};
const editExperience = async (
  _id: string,
  data: Experience
): Promise<Experience> => {
  //console.log("id inside: ", _id);
  // console.log("data: ", data);
  try {
    const experience = await userExperience.findById(_id);
    if (experience) {
      const { position, company, location, date, description } = data;
      console.log(`EXPERIENCE BEFORE: ${experience}`);
      experience.set({
        position,
        company,
        location,
        date,
        description
      });
      const resultExperience = await experience.save();
      return resultExperience;
      //console.log(`EXPERIENCE AFTER: ${experience}`);
    }
    return experience;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteExperience = async (_id): Promise<Experience> => {
  const experience = await userExperience.deleteOne({ _id });
  return experience;
};

const createEducation = async (user, fields: Education): Promise<Education> => {
  const { _id } = user;
  const { school, degree, majorField, date, description } = fields;
  console.log(`before id ${_id}  ${JSON.stringify(user)}`);
  const education = new userEducation({
    user: {
      _id
    },
    school,
    degree,
    majorField,
    date,
    description
  });
  try {
    const field: Education = await education.save();
    console.log(`sucess: ${field}`);
    return field;
  } catch (err) {
    console.log(err);
    return err;
  }
};
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
export {
  experienceSchema,
  educationSchema,
  createExperience,
  editExperience,
  deleteExperience,
  createEducation,
  candidateFields
};
