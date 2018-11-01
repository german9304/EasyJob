// const mongoose = require("mongoose");
import * as mongoose from "mongoose";
import { randomBytes } from "crypto";
import { extname } from "path";
import * as GridFsStorage from "multer-gridfs-storage";
import db from "./db-connection";
import { User } from "../user";
import { Schema, Document, Model } from "mongoose";
import { GridFSBucket, GridFSBucketReadStream } from "mongodb";

const gridFsSchema: Schema = new mongoose.Schema(
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
let bucketName: GridFSBucket;
db.once("open", () => {
  bucketName = new GridFSBucket(db.db, {
    bucketName: "uploads"
  });
  console.log("connction open");
});

const gridFsFiles: Model<Document> = mongoose.model<Document>(
  "uploads",
  gridFsSchema
);

const fileStorage: GridFsStorage = new GridFsStorage({
  db,
  file: (req, file): Promise<{}> => {
    return new Promise(
      (resolve, reject): void => {
        randomBytes(16, (err: Error, buf: Buffer) => {
          if (err) {
            return reject(err);
          }
          const filename: string = `${buf.toString("hex")}${extname(
            file.originalname
          )}`;
          const { user } = req;
          // console.log(user);
          const fileInfo = {
            filename,
            metadata: {
              user
            },
            bucketName: "uploads"
          };
          resolve(fileInfo);
        });
      }
    );
  }
});

const getCandidateFiles = async () => {
  const getAllFiles = await gridFsFiles.find();
  return getAllFiles;
};

const getCandidateFile = fileName => {
  try {
    const file: GridFSBucketReadStream = bucketName.openDownloadStreamByName(
      fileName
    );
    return file;
  } catch (err) {
    console.error(err);
  }
};
export { getCandidateFiles, getCandidateFile, fileStorage };
