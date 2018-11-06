export interface Contact {
  username: string;
  email: string;
  auth: boolean;
  jwt: string;
}

export class USER implements Contact {
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
