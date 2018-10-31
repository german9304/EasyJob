import { Request, Response } from "express";
import { GridFSBucketReadStream } from "mongodb";
import { getCandidateFiles } from "../Models/gridFiles";

const getFiles = async (req: Request, res: Response): Promise<Response> => {
  const files = await getCandidateFiles();
  //files.then(files => console.log(files));
  return res.json(files);
};
const uploadFile = (req: Request, res: Response) => {
  const { file } = req;
  res.json(file);
};

export { getFiles, uploadFile };
