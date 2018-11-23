// const mongoose = require("mongoose");
import * as mongoose from 'mongoose';
import Schema = mongoose.Schema;
import Document = mongoose.Document;
import Model = mongoose.Model;
import { randomBytes } from 'crypto';
import { extname } from 'path';
import * as GridFsStorage from 'multer-gridfs-storage';
import dbConnection from './db-connection';
import { User } from '../user';
import { FileDocument, FILE } from './file';
import { GridFSBucket, GridFSBucketReadStream, ObjectId } from 'mongodb';

const gridFsSchema: Schema = new mongoose.Schema(
  {
    length: Number,
    chunkSize: Number,
    uploadDate: Date,
    filename: String,
    metadata: {
      user: {
        _id: String,
      },
    },
    originalName: String,
    md5: String,
    contentType: String,
  },
  { collection: 'uploads.files', versionKey: false },
);
let bucketName: GridFSBucket;
dbConnection.once('open', () => {
  bucketName = new GridFSBucket(dbConnection.db, {
    bucketName: 'uploads',
  });
  console.log('connction open');
});

const gridFsFiles: Model<FileDocument> = mongoose.model<FileDocument>(
  'uploads',
  gridFsSchema,
);

const fileInfo = (
  { originalname: originalName }: { originalname: string },
  buf: Buffer,
  id: string,
  bucketName: string,
): FILE => {
  const filename: string = `${buf.toString('hex')}${extname(originalName)}`;
  return {
    filename,
    bucketName,
    metadata: {
      user: { _id: id },
    },
  };
};

const file: (req, file) => Promise<{}> = (req, file): Promise<{}> => {
  return new Promise(
    (resolve, reject): void => {
      randomBytes(16, (err: Error, buf: Buffer) => {
        if (err) {
          return reject(err);
        }
        // console.log(file);
        const { user }: { user: User } = req;
        const { _id } = user;
        // console.log(user);
        const fileI: FILE = fileInfo(file, buf, _id, 'uploads');
        console.log(fileI);
        resolve(fileI);
      });
    },
  );
};
const fileStorage: GridFsStorage = new GridFsStorage({
  file,
  db: dbConnection,
});

const getCandidateFiles = async () => {
  const getAllFiles = await gridFsFiles.find();
  return getAllFiles;
};

const getCandidateResume = async (id: string): Promise<FileDocument> => {
  const gridFile = await gridFsFiles.findOne({
    metadata: { user: { _id: `${id}` } },
  });
  return gridFile;
};
const getCandidateFile = async (
  id: ObjectId,
): Promise<GridFSBucketReadStream> => {
  try {
    console.log(id);
    const gridFile: FileDocument = await gridFsFiles.findOne({
      metadata: { user: { _id: id } },
    });
    console.log(gridFile);
    if (gridFile) {
      const { filename } = gridFile;
      const file: GridFSBucketReadStream = bucketName.openDownloadStreamByName(
        filename,
      );
      return file;
    }
  } catch (err) {
    console.error(err);
  }
};

const findFileByIdUpdate = async (id: string, originalName: string) => {
  try {
    const gridFile: FileDocument = await gridFsFiles.findById(id);
    if (gridFile) {
      gridFile.set({
        originalName,
      });
      return await gridFile.save();
    }
    return gridFile;
  } catch (err) {
    console.error(err);
  }
};

export {
  getCandidateFiles,
  findFileByIdUpdate,
  getCandidateFile,
  fileStorage,
  getCandidateResume,
};
