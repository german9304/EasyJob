// const mongoose = require("mongoose");
import * as mongoose from "mongoose";
import { randomBytes } from "crypto";
import { extname } from "path";
import * as GridFsStorage from "multer-gridfs-storage";
import db from "./db-connection";
import { User } from "../user";
import { Schema, Document, Model } from "mongoose";
import { FileDocument } from "./file";
import { GridFSBucket, GridFSBucketReadStream, ObjectId } from "mongodb";

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

const FileInfo = (filename: string, _id: string, bucketName: string) => {
  return {
    filename,
    metadata: {
      user: { _id }
    },
    bucketName
  };
};

const file: (req, file) => Promise<{}> = (req, file): Promise<{}> => {
  return new Promise(
    (resolve, reject): void => {
      randomBytes(16, (err: Error, buf: Buffer) => {
        if (err) {
          return reject(err);
        }
        const { originalname: originalName }: { originalname: string } = file;
        const filename: string = `${buf.toString("hex")}${extname(
          originalName
        )}`;
        //console.log(file);
        const { user } = req;
        const { _id }: { _id: string } = user;
        // console.log(user);
        const fileInfo = FileInfo(filename, _id, "uploads");
        console.log(fileInfo);
        resolve(fileInfo);
      });
    }
  );
};
const fileStorage: GridFsStorage = new GridFsStorage({
  db,
  file
});

const getCandidateFiles = async () => {
  const getAllFiles = await gridFsFiles.find();
  return getAllFiles;
};

const getCandidateResume = async (_id: string): Promise<FileDocument> => {
  return await gridFsFiles.findOne({
    metadata: { user: { _id: `${_id}` } }
  });
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
export { getCandidateFiles, getCandidateFile, fileStorage, getCandidateResume };
