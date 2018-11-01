import { Injectable, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Router, Route, ActivatedRoute } from "@angular/router";

import { Observable, of, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION } from "../job";
import { USER } from "../user";
import { List, Map } from "immutable";
import { AuthService } from "../services/auth.service";

@Injectable()
export class CandidateFieldsService implements OnInit {
  EXPERIENCE: List<EXPERIENCE> = List();
  EDUCATION: List<EDUCATION> = List();
  credentials: USER = this.auth.getUserCredentials() as USER;
  jwt: string = "";
  httpOptions = {};
  ngOnInit() {
    //console.log("on init service");
  }
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const user = this.auth.getUserCredentials() as USER;
    const jwt: string = user.jwt;
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      })
    };
    // console.log(`credentials ${this.httpOptions.headers.get("Authorization")}`);
  }
  /*
  *
  * Creates experience
  * 
  * 
  */
  createExperience(experience: EXPERIENCE): Observable<EXPERIENCE> {
    // console.log(this.httpOptions.headers.get("Authorization"));
    return this.http
      .post<EXPERIENCE>(
        `/api/fields/experience`,
        experience,
        this.auth.UserHeaders
      )
      .pipe(
        tap(data => console.log(`experience: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return this.handleError(error);
        })
      );
  }
  /*
  *
  * Updates Experience 
  * 
  * 
  */
  updateExperience(id: string, experience: EXPERIENCE): Observable<EXPERIENCE> {
    return this.http
      .put<EXPERIENCE>(
        `/api/fields/experience/${id}`,
        experience,
        this.auth.UserHeaders
      )
      .pipe(
        tap(data => console.log(`experience: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return this.handleError(error);
        })
      );
  }
  /*
  * Get Experience
  */
  getExperience(id: string): Observable<EXPERIENCE> {
    return this.http.get<EXPERIENCE>(`/api/fields/experience/${id}`).pipe(
      tap(data => console.log(`experience: ${data}`)),
      catchError(error => {
        console.log(`the error is ${error}`);
        return this.handleError(error);
      })
    );
  }
  /*
  *
  * Deletes Experience
  * 
  * 
  */
  deleteExperience(id: string): Observable<{}> {
    return this.http
      .delete<{}>(`/api/fields/experience/${id}`, this.auth.UserHeaders)
      .pipe(
        tap(data => console.log(`experience: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return this.handleError(error);
        })
      );
  }

  getEducation(id: string): Observable<EDUCATION> {
    return this.http.get<EDUCATION>(`/api/fields/education/${id}`).pipe(
      tap(data => console.log(`education: ${data}`)),
      catchError(error => {
        console.log(`the error is ${error}`);
        return this.handleError(error);
      })
    );
  }

  createEducation(experience: EDUCATION): Observable<EDUCATION> {
    return this.http
      .post<EDUCATION>(`/api/fields/education`, experience, this.auth.UserHeaders)
      .pipe(
        tap(data => console.log(`education: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return of(error);
        })
      );
  }

  updateEducation(id: string, experience: EXPERIENCE): Observable<EXPERIENCE> {
    return this.http
      .put<EXPERIENCE>(
        `/api/fields/education/${id}`,
        experience,
        this.auth.UserHeaders
      )
      .pipe(
        tap(data => console.log(`education: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return this.handleError(error);
        })
      );
  }

  deleteEducation(id: string): Observable<{}> {
    return this.http
      .delete<{}>(`/api/fields/education/${id}`, this.auth.UserHeaders)
      .pipe(
        tap(data => console.log(`education: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return this.handleError(error);
        })
      );
  }

  getFields(): Observable<FIELDS> {
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

  goBackToProfile() {
    this.router.navigate(["../jobseeker/profile"]);
  }
  private handleError(error: HttpErrorResponse) {
    console.log(`error ${error.error} ${error.status}`);
    return throwError("Something bad happened; please try again later.");
  }
}
