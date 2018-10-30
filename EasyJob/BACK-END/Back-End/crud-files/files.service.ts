import { Request, Response } from "express";
import { GridFSBucketReadStream } from "mongodb";
import { getCandidateFiles } from "../Models/gridFiles";

const getFiles = (req: Request, res: Response): Response => {
  const files = getCandidateFiles();
  files.then(files => console.log(files));
  return res.json({});
};
const uploadFile = (req: Request, res: Response) => {
  const { file } = req;
  res.json(file);
};

export { getFiles, uploadFile };
