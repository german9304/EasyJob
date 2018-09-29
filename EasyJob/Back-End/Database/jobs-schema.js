const mongoose = require("mongoose");
const db = require("./db-connection");
/*
Jobs Schema
*/
const jobsSchema = new mongoose.Schema(
  {
    category: {
      _id: String,
      name: String
    },
    title: String,
    companyName: String,
    location: String,
    description: String
  },
  { collection: "jobs", versionKey: false }
);

const categorySchema = new mongoose.Schema(
  {
    category: String
  },
  { collection: "categories", versionKey: false }
);

const jobsModel = mongoose.model("jobs", jobsSchema);
const categoryModel = mongoose.model("category", categorySchema);

const createAJob = ({
  category,
  title,
  companyName,
  location,
  description
}) => {
  const { _id, name } = category;
  return new jobsModel({
    category: {
      _id,
      name
    },
    title,
    companyName,
    location,
    description
  });
};

const createAcategory = ({ name }) => {
  return (category = new categoryModel({
    name
  }));
};

module.exports = {
  createAJob,
  createAcategory,
  categoryModel
};
