const mongoose = require("mongoose");
const db = require("./db-connection");
/*
Jobs Schema
*/
const jobsSchema = new mongoose.Schema({
       title: String,
       companyName: String, 
       location: String,
       description: String
});

const jobsModel = mongoose.model('jobs', jobsSchema);


const addJobs = ({title, companyName, location, description}) => {
    return new jobsModel({
    	title,
    	companyName,
    	location,
    	description
    })
}


