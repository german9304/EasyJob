import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION } from "../job";

@Injectable()
export class CandidateFieldsService {
  EXPERIENCE: EXPERIENCE[] = [];
  EDUCATION: EDUCATION[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  createExperience(experience: EXPERIENCE): Observable<EXPERIENCE> {
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
