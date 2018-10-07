export interface contact {
  username: string;
  email: string;
  auth: boolean;
  jwt: string;
}

export class USER implements contact {
  constructor(
    public username: string,
    public email: string,
    public auth: boolean,
    public jwt: string
  ) {
    this.username = username;
    this.email = email;
    this.auth = auth;
    this.jwt = jwt;
  }
}
