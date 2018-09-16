export interface contact {
  username: string;
  email: string;
  auth: boolean;
}

export class USER implements contact {
  constructor(
    public username: string,
    public email: string,
    public auth: boolean
  ) {
    this.username = username;
    this.email = email;
    this.auth = auth;
  }
}
