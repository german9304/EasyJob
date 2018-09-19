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
  url: string = `/api`;
  userUrl: string = `/user`;
  constructor(private http: HttpClient) {}

  authenticate(user: USER): Observable<USER> {
    return this.http.post<USER>(this.url, user, httpOptions);
  }
  getUSER(): Observable<USER> {
    return this.http.get<USER>(this.userUrl).pipe(
      catchError(val => of(val)),
      tap(val => console.log(val))
    );
  }
  logUser() {
    this.isLoggedin = true;
  }
}
