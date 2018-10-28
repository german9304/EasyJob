// const mongoose = require("mongoose");
import * as mongoose from "mongoose";
import db from "./db-connection";

const gridFsSchema = new mongoose.Schema(
  {
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    filename: String,
    md5: String,
    contentType: String
  },
  { collection: "uploads.files", versionKey: false }
);
