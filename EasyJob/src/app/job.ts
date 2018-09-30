export class Job {
  category: {
    _id: String;
    name: String;
  };
  title: String;
  companyName: String;
  location: String;
  description: String;
}

export class CATEGORY {
  _id: String;
  category: String;
}

export class EXPERIENCE {
  position: String;
  company: String;
  location: String;
  date: { start: String; end: String };
  description: String;
}
