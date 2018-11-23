import * as mongoose from 'mongoose';
import Schema  = mongoose.Schema;
// import db from "./db-connection";
import * as cheerio from 'cheerio';
import * as request from 'request';
import * as rp from 'request-promise';
/*
Jobs Schema
*/
const jobsSchema: Schema = new mongoose.Schema(
  {
    category: {
      _id: String,
      name: String,
    },
    title: String,
    companyName: String,
    location: String,
    description: String,
  },
  { collection: 'jobs', versionKey: false },
);

const categorySchema: Schema = new mongoose.Schema(
  {
    category: String,
  },
  { collection: 'categories', versionKey: false },
);

const jobsModel = mongoose.model('jobs', jobsSchema);
const categoryModel = mongoose.model('category', categorySchema);

const createAJob = ({
  category,
  title,
  companyName,
  location,
  description,
}) => {
  const { _id, name } = category;
  return new jobsModel({
    title,
    companyName,
    location,
    description,
    category: {
      _id,
      name,
    },
  });
};

const createAcategory = ({ name }) => {
  return new categoryModel({
    name,
  });
};

const jobSearch = async ({ search: field, location }) => {
  // console.log(field, location)
  const url = `https://www.ziprecruiter.com/candidate/search?search=${field}&location=${location}`;
  const options = {
    uri: url,
    transform(body) {
      return cheerio.load(body);
    },
  };
  // const res = request(
  //   `https://www.ziprecruiter.com/candidate/search?search=${field}&location=${location}`
  // );
  const $ = await rp(options);
    // console.log($);
    // console.log(res);
  const jobslist = [];
  try {
    $('#job_list .job_results article').each(function () {
      const jobContent = $(this).children('.job_content');
      const title = jobContent.find('.just_job_title');
        // console.log(title.text());
      const companyName = jobContent.find('.t_org_link.name');
        // console.log(companyName.text());
      const location = jobContent.find('.t_location_link.location');
        // console.log(location.text());
      const description = jobContent.find('.job_snippet a');
        // console.log(description.text());
      const job = {
        title: title.text(),
        company: companyName.text(),
        location: location.text(),
        description: description.text().trim(),
      };
        // console.log("res: ", job);
      jobslist.push(job);
    });
  } catch (error) {

  }
  return jobslist;
};

export { jobSearch, createAJob, createAcategory, categoryModel };
