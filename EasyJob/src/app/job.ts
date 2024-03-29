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

export class EDUCATION {
  _id: string;
  school: string;
  degree: string;
  majorField: string;
  date: { start: string; end: string };
  description: string;
}

export class FIELDS {
  experience: EXPERIENCE[];
  education: Array<any>;
}

export const JOBS: JOB[] = [
  {
    category: {
      _id: "",
      name: ""
    },
    title: "SOFTWARE ENGINEER",
    company: "MICROSOFT",
    location: "Monterey By",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, velit."
  },
  {
    category: {
      _id: "",
      name: ""
    },
    title: "BACK-END",
    company: "GOOGLE",
    location: "San Diego",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos est natus deleniti magni, libero blanditiis. Qui voluptasconsectetur quod!"
  }
];
