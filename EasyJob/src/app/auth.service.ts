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
    return this.http.post<any>('/create/user', user, httpOptions)
    .pipe(catchError(val => {
      return of(`I caught: ${val.status}`)
    }));
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
