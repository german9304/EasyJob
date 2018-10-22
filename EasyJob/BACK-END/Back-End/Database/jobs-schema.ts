import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import db from "./db-connection";
import * as cheerio from "cheerio";
import * as request from "request";
import * as rp from "request-promise";
/*
Jobs Schema
*/
const jobsSchema: Schema = new mongoose.Schema(
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

const categorySchema: Schema = new mongoose.Schema(
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
  return new categoryModel({
    name
  });
};

const jobSearch = async ({ search: field, location }) => {
  // console.log(field, location)
  const url = `https://www.ziprecruiter.com/candidate/search?search=${field}&location=${location}`;
  const options = {
    uri: url,
    transform(body) {
      return cheerio.load(body);
    }
  };
  // const res = request(
  //   `https://www.ziprecruiter.com/candidate/search?search=${field}&location=${location}`
  // );
  try {
    const $ = await rp(options);
    // console.log($);
    // console.log(res);
    const jobslist = [];
    $("#job_list .job_results article").each(function(i, elem) {
      const job_content = $(this).children(".job_content");
      const title = job_content.find(".just_job_title");
      // console.log(title.text());
      const companyName = job_content.find(".t_org_link.name");
      // console.log(companyName.text());
      const location = job_content.find(".t_location_link.location");
      // console.log(location.text());
      const description = job_content.find(".job_snippet a");
      // console.log(description.text());
      const job = {
        title: title.text(),
        company: companyName.text(),
        location: location.text(),
        description: description.text().trim()
      };
      // console.log("res: ", job);
      jobslist.push(job);
    });
    return jobslist;
  } catch (error) {
    console.error(error);
    // expected output: SyntaxError: unterminated string literal
    // Note - error messages will vary depending on browser
  }
};

export { jobSearch, createAJob, createAcategory, categoryModel };
