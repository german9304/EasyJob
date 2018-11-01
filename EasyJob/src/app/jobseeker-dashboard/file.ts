export interface FILE {
  length: number;
  chunkSize: number;
  uploadDate: Date;
  filename: string;
  metadata: {
    user: {
      _id: string;
    };
  };
  md5: string;
  contentType: string;
}
