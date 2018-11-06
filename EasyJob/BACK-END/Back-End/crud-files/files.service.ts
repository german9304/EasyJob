import { Request, Response } from 'express';
import { GridFSBucketReadStream } from 'mongodb';
import {
  getCandidateFiles,
  getCandidateFile,
  findFileByIdUpdate,
} from '../Models/file-schema';
import { FILE } from '../Models/file';

const getFiles = async (req: Request, res: Response): Promise<Response> => {
  const files = await getCandidateFiles();
  // files.then(files => console.log(files));
  return res.json(files);
};
const getResume = async (req: Request, res: Response): Promise<Response> => {
  try {
    if (req.user) {
      const { id } = req.user;
      const file: GridFSBucketReadStream = await getCandidateFile(id);
      return file.pipe(res);
    }
    return res.status(404).json(null);
  } catch (err) {
    console.error(err);
  }
};

const uploadFile = async (req: Request, res: Response): Promise<Response> => {
  const { file }: { file: FILE } = req;
  const { originalname: originalName, id } = file;
  const fileRes = await findFileByIdUpdate(id, originalName);
  return res.json(fileRes);
};

export { getFiles, uploadFile, getResume };
