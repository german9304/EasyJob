import { Request, Response } from "express";

const getFiles = (req: Request, res: Response) => {};
const uploadFile = (req: Request, res: Response) => {
  const { file } = req;
  res.json(file);
};

export { getFiles, uploadFile };
