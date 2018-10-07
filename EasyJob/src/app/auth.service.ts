import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { tap, catchError } from "rxjs/operators";
import { USER } from "./user";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class AuthService {
  isLoggedin: boolean = false;
  url: string = `/login`;
  userUrl: string = `/user`;
  user: any;
  constructor(private http: HttpClient) {}

  authenticate(user): Observable<any> {
    return this.http.post<any>("/auth/create/user", user, httpOptions).pipe(
      tap(({ user }) => {
        console.log("create account: ", user);
      }),
      catchError(val => {
        return of(`I caught: ${val.status}`);
      })
    );
  }
  login(user): Observable<any> {
    return this.http.post<any>("/auth/login", user, httpOptions).pipe(
      tap(({ user }) => {
        this.createUserCredentials(user);
      }),
      catchError(val => {
        return of(`I caught: ${val.status}`);
      })
    );
  }

  getUSER(): Observable<USER> {
    return this.http.get<USER>(this.userUrl).pipe(
      catchError(val => of(val)),
      tap(user => console.log(`user sigined in`))
    );
  }
  logUser() {
    this.isLoggedin = true;
  }

  createUserCredentials(user: USER): boolean | USER {
    try {
      const { email, auth, jwt } = user;
      const usr = new USER("", email, auth, jwt);
      console.log("user: ", usr);
      localStorage.setItem("token", JSON.stringify(user));
      return usr;
    } catch (error) {
      return false;
    }
  }
  getUserCredentials(): boolean | USER {
    try {
      // const user = JSON.parse(localStorage.getItem("token"));
      const token = localStorage.getItem("token");
      if (token) {
        return JSON.parse(token);
      }
      // console.log("credentials: ", localStorage.getItem("token"));
      return false;
      // return user;
    } catch (error) {
      return false;
    }
  }
  clearCredentials() {
    localStorage.removeItem("token");
  }
}
