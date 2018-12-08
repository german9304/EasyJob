export class JOB {
  _id?: number;
  category: {
    _id?: number;
    name: string;
  };
  title: string;
  company: string;
  industry: string;
  location: string;
  skills: SKILL[];
  description: string;
}

export class CATEGORY {
  _id: string;
  category: string;
}

export class EXPERIENCE {
  _id: string;
  position: string;
  company: string;
  location: string;
  date: { start: string; end: string };
  description: string;
}

export class EDUCATION {
  _id: string;
  school: string;
  degree: string;
  majorField: string;
  date: { start: string; end: string };
  description: string;
}

export interface FILE {
  length?: number;
  chunkSize: number;
  uploadDate: string;
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
export class FIELDS {
  experience: EXPERIENCE[];
  education: EDUCATION[];
  fileInfo: FILE;
}

export interface SKILL {
  id: number;
  skill: string;
}

export const JOBS: JOB[] = [];
