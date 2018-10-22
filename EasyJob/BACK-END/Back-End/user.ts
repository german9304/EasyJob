export interface User {
  email: string;
  password: string;
  jwt?: string;
  auth?: boolean;
}
export interface GoogleUser {
  email: string;
  googleId: string;
  jwt: string;
}
