export interface Contact {
  username: string;
  email: string;
  auth: boolean;
  jwt: string;
  employer: number;
  jobseeker: number;
}

export class USER implements Contact {
  constructor(
    public username: string,
    public email: string,
    public auth: boolean,
    public jwt: string,
    public employer: number,
    public jobseeker: number
  ) {
    this.username = username;
    this.email = email;
    this.auth = auth;
    this.jwt = jwt;
  }
}
