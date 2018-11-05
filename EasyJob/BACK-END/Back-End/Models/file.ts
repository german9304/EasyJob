import { Document } from "mongoose";

export interface FILE {
  id?: string;
  length?: number;
  chunkSize?: number;
  uploadDate?: Date;
  filename?: string;
  metadata?: {
    user: {
      _id: string;
    };
  };
  originalname?: string;
  md5?: string;
  contentType?: string;
}

export interface FileDocument extends Document {
  length?: number;
  chunkSize: number;
  uploadDate: Date;
  filename: string;
  metadata: {
    user: {
      _id: string;
    };
  };
  originalName: string;
  md5: string;
  contentType: string;
}
