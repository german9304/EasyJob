import { Document } from 'mongoose';
export interface User {
  _id?: string;
  email: string;
  password?: string;
  jwt?: string;
  auth?: boolean;
}
export interface GoogleUser {
  _id?: string;
  email: string;
  googleId: string;
  jwt: string;
}

export interface IUser extends Document {
  name: String;
  candidate: Boolean;
  employer: Boolean;
  email: String;
  googleId: String;
  password: String;
  jwt: String;
  comparePasswords(userPassword, hash): Promise<boolean>;
}