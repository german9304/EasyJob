import { Request, Response } from "express";
import { GridFSBucketReadStream } from "mongodb";
import { getCandidateFiles } from "../Models/gridFiles";

const getFiles = (req: Request, res: Response): Response => {
  const { filename } = req.params;
  const file: GridFSBucketReadStream = getCandidateFiles(filename);
  return file.pipe(res);
  //return res.json(filename);
};
const uploadFile = (req: Request, res: Response) => {
  const { file } = req;
  res.json(file);
};

export { getFiles, uploadFile };
