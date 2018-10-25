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
