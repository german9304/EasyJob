// const mongoose = require("mongoose");
import * as mongoose from "mongoose";
import { randomBytes } from "crypto";
import { extname } from "path";
import * as GridFsStorage from "multer-gridfs-storage";
import db from "./db-connection";
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
          const fileInfo = {
            filename,
            metadata: {
              _id: "12345",
              type: "resume"
            },
            bucketName: "uploads"
          };
          resolve(fileInfo);
        });
      }
    );
  }
});

const getCandidateFiles = (fileName): GridFSBucketReadStream => {
  try {
    const file: GridFSBucketReadStream = bucketName.openDownloadStreamByName(
      fileName
    );
    return file;
  } catch (err) {
    console.error(err);
  }
};

export { getCandidateFiles, fileStorage };
