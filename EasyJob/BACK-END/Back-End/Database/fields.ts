import { Document } from "mongoose";

interface Experience extends Document {
  user: {
    _id: String;
  };
  position: String;
  company: String;
  location: String;
  date: { start: String; end: String };
  description: String;
}

interface Education extends Document {
  user: {
    _id: String;
  };
  school: String;
  degree: String;
  majorField: String;
  date: { start: String; end: String };
  description: String;
}

interface Fields {
  education: Array<Education>;
  experience: Array<Experience>;
}

export { Experience, Education, Fields };
