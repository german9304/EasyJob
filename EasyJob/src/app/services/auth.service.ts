import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { USER } from "../user";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

@Injectable()
export class AuthService {
  isLoggedin: boolean = false;
  url: string = `/login`;
  userUrl: string = `/user`;
  user: any;
  httpOptions = {};
  httHeaderpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) {}

  authenticate(user): Observable<any> {
    return this.http
      .post<any>("/auth/create/user", user, this.httHeaderpOptions)
      .pipe(
        tap(({ user }) => {
          console.log("create account: ", user);
        }),
        catchError(val => {
          return of(`I caught: ${val.status}`);
        })
      );
  }
  login(user): Observable<any> {
    return this.http
      .post<any>("/auth/login", user, this.httHeaderpOptions)
      .pipe(
        tap(({ user }) => {
          this.createUserCredentials(user);
        }),
        catchError(error => {
          // console.log(`error ${JSON.stringify(error)}`);
          return this.handleError(error);
        })
      );
  }

  getUSER(): Observable<USER> {
    return this.http.get<USER>(this.userUrl).pipe(
      catchError(error => {
        console.log(error.error);
        // return of(error);
        //this.handleError(error);
        return of(null);
      })
      // tap(user => console.log(`user ${JSON.stringify(user)}`))
    );
  }
  logUser() {
    this.isLoggedin = true;
  }

  set HttpHeaders({ jwt, httpOptions }) {
    // console.log(jwt);
    httpOptions.set("", "");
  }
  createUserCredentials(user: USER): USER {
    try {
      const { email, auth, jwt } = user;
      const usr = new USER("", email, auth, jwt);
      console.log("user: ", usr);
      localStorage.setItem("token", JSON.stringify(user));
      // const httpOpts = {
      //   jwt,
      //   httpOptions: this.httpOptions
      // };
      //this.HttpHeaders(httpOpts);
      return usr;
    } catch (error) {
      console.error(error);
    }
  }
  getUserCredentials(): boolean | USER {
    try {
      // const user = JSON.parse(localStorage.getItem("token"));
      const token = localStorage.getItem("token");
      // console.log("user credentials ", localStorage.getItem("token"));
      if (token) {
        // console.log("token: ", token);
        return JSON.parse(token);
      }
      // console.log("credentials: ", localStorage.getItem("token"));
      return false;
      // return user;
    } catch (error) {
      console.error(error);
    }
  }
  clearCredentials() {
    localStorage.removeItem("token");
  }

  get UserHeaders(): { headers: HttpHeaders } {
    const credentials: USER = this.getUserCredentials() as USER;
    const { jwt } = credentials;
    // console.log(credentials);
    // console.log(jwt);
    const httHeaderpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      })
    };
    return httHeaderpOptions;
  }

  get userHeadersFiles(): { headers: HttpHeaders } {
     const credentials: USER = this.getUserCredentials() as USER;
    const { jwt } = credentials;
    // console.log(credentials);
    // console.log(jwt);
    const httHeaderpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({
        "Content-Type": "application/",
        Authorization: `Bearer ${jwt}`
      })
    };
    return httHeaderpOptions;
  }

  private handleError(error: HttpErrorResponse) {
    console.log(`error ${error.error} ${error.status}`);
    return throwError(` ${error.error}`);
  }
}
