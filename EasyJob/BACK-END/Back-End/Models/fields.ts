import { Document, Model } from "mongoose";
import { FileDocument } from "./file";

interface Experience extends Document {
  position?: String;
  company?: String;
  location?: String;
}

interface Education extends Document {
  school?: String;
  degree?: String;
  majorField?: String;
}

interface FieldModel extends Experience, Education {
  user: {
    _id: String;
  };
  date: { start: String; end: String };
  description: String;
}

interface Field {
  user: {
    _id: String;
  };
  school?: String;
  degree?: String;
  majorField?: String;
  position?: String;
  company?: String;
  location?: String;
  date: { start: String; end: String };
  description: String;
}
interface Fields {
  education: Array<Education>;
  experience: Array<Experience>;
  fileInfo: FileDocument;
}

export { Experience, Education, Field, Fields, FieldModel };
