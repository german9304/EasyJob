import { Injectable, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION } from "../job";
import { USER } from "../user";

import { AuthService } from "../services/auth.service";

@Injectable()
export class CandidateFieldsService implements OnInit {
  EXPERIENCE: EXPERIENCE[] = [];
  EDUCATION: EDUCATION[] = [];
  credentials: USER = this.auth.getUserCredentials() as USER;
  jwt: string = "";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.credentials.jwt}`
    })
  };
  ngOnInit() {
    //console.log("on init service");
  }
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = this.auth.getUserCredentials() as USER;
    this.jwt = user.jwt;

    // console.log(`credentials ${this.httpOptions.headers.get("Authorization")}`);
  }

  createExperience(experience: EXPERIENCE): Observable<EXPERIENCE> {
    // console.log(this.httpOptions.headers.get("Authorization"));
    return this.http
      .post<EXPERIENCE>(
        `/api/fields/create/experience`,
        experience,
        this.httpOptions
      )
      .pipe(
        tap(data => console.log(`experience: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return this.handleError(error);
        })
      );
  }

  createEducation(experience: EDUCATION): Observable<EDUCATION> {
    return this.http
      .post<EDUCATION>(
        `/api/fields/create/education`,
        experience,
        this.httpOptions
      )
      .pipe(
        tap(data => console.log(`education: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return of(error);
        })
      );
  }

  getExperience(): Observable<FIELDS> {
    return this.http.get<FIELDS>(`/api/fields/candidate`).pipe(
      tap(fields => {
        console.log(`fields: ${fields.experience}`);
      }),
      catchError(error => {
        console.log(`the error is ${error}`);
        return of(error);
      })
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(`error ${error.error} ${error.status}`);
    return throwError("Something bad happened; please try again later.");
  }
}
