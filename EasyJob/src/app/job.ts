export class JOB {
  category: {
    _id: string;
    name: string;
  };
  title: string;
  company: string;
  location: string;
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

export class FIELDS {
  experience: EXPERIENCE[];
  education: Array<any>;
}
