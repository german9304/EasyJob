import { Request, Response } from "express";
import { GridFSBucketReadStream } from "mongodb";
import { getCandidateFiles, getCandidateFile } from "../Models/file-schema";

const getFiles = async (req: Request, res: Response): Promise<Response> => {
  const files = await getCandidateFiles();
  //files.then(files => console.log(files));
  return res.json(files);
};
const getResume = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const file: GridFSBucketReadStream = await getCandidateFile(id);
    return file.pipe(res);
    // return res.json({});
  } catch (err) {
    console.error(err);
  }
};

const uploadFile = (req: Request, res: Response): Response => {
  const { file } = req;
  const { originalname } = file;
  return res.json(file);
};

export { getFiles, uploadFile, getResume };
