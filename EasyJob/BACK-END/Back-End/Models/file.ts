export interface FILE {
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