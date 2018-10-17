const mongoose = require("mongoose");
const db = require("./db-connection");

const experienceSchema = new mongoose.Schema(
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

const educationSchema = new mongoose.Schema(
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

const userExperience = mongoose.model("education", experienceSchema);

const userEducation = mongoose.model("experience", educationSchema);

const createExperience = async (user, fields) => {
  const { _id } = user;
  const { postion, company, location, date, description } = fields;
  //   console.log(`${_id}   ${JSON.stringify(fields)}`);
  const experience = new userExperience({
    user: {
      _id
    },
    postion,
    company,
    location,
    date,
    description
  });
  try {
    const field = await experience.save();
    console.log(`sucess: ${field}`);
    return field;
  } catch (err) {
    console.log(err);
    return "error";
  }
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

module.exports = {
  experienceSchema,
  educationSchema,
  createExperience,
  createEducation
};
