// const mongoose = require("mongoose");
import * as mongoose from "mongoose";
import { randomBytes } from "crypto";
import { extname } from "path";
import * as GridFsStorage from "multer-gridfs-storage";
import db from "./db-connection";
import { User } from "../user";
import { Schema, Document, Model } from "mongoose";
import { GridFSBucket, GridFSBucketReadStream, ObjectId } from "mongodb";

interface FileDocument extends Document {
  length?: number;
  chunkSize: number;
  uploadDate: Date;
  filename: string;
  metadata: {
    user: {
      _id: string;
    };
  };
  originalname: string;
  md5: string;
  contentType: string;
}
const gridFsSchema: Schema = new mongoose.Schema(
  {
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    filename: String,
    metadata: {
      user: {
        _id: String
      }
    },
    originalname: String,
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

const gridFsFiles: Model<FileDocument> = mongoose.model<FileDocument>(
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
          const { _id }: { _id: string } = user;
          // console.log(user);
          const fileInfo = {
            filename,
            metadata: {
              user: { _id }
            },
            bucketName: "uploads"
          };
          console.log(fileInfo);
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

const getCandidateFile = async (
  _id: ObjectId
): Promise<GridFSBucketReadStream> => {
  try {
    console.log(_id);
    const gridFile: FileDocument = await gridFsFiles.findOne({
      metadata: { user: { _id } }
    });
    console.log(gridFile);
    if (gridFile) {
      const { filename } = gridFile;
      const file: GridFSBucketReadStream = bucketName.openDownloadStreamByName(
        filename
      );
      return file;
    }
  } catch (err) {
    console.error(err);
  }
};
export { getCandidateFiles, getCandidateFile, fileStorage };
