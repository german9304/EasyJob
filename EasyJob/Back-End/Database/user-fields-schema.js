const mongoose = require("mongoose");
const { Schema } = mongoose;
const db = require("./db-connection");

const experienceSchema = new Schema(
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

const userEducation = mongoose.model("education", educationSchema);

const userExperience = mongoose.model("experience", experienceSchema);

const createExperience = async (user, fields) => {
  const { _id } = user;
  const { position, company, location, date, description } = fields;
  console.log(fields);
  const experience = new userExperience({
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
    return "error";
  }
};
const editExperience = async (_id, data) => {
  //console.log("id inside: ", _id);
  // console.log("data: ", data);
  try {
    const experience = await userExperience.findById(_id);
    if (experience) {
      const { position, company, location, date, description } = data;
      // console.log(`EXPERIENCE BEFORE: ${experience}`);
      experience.set({
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
  }
};

const deleteExperience = async (_id, fields) => {
  const experience = await userExperience.deleteOne({ _id });
  return experience;
};

const createEducation = async (user, fields) => {
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
    const field = await education.save();
    console.log(`sucess: ${field}`);
    return field;
  } catch (err) {
    console.log(err);
  }
};
const candidateFields = async id => {
  const education = await userEducation.find({
    user: { _id: `${id}` }
  });
  const experience = await userExperience.find({
    user: { _id: `${id}` }
  });

  return {
    education,
    experience
  };
};
module.exports = {
  experienceSchema,
  educationSchema,
  createExperience,
  editExperience,
  deleteExperience,
  createEducation,
  candidateFields
};
