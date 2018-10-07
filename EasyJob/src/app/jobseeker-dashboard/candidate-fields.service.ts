import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION } from "../job";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable()
export class CandidateFieldsService {
  EXPERIENCE: EXPERIENCE[] = [];
  EDUCATION: EDUCATION[] = [];

  constructor(private http: HttpClient) {}

  createExperience(experience: EXPERIENCE): Observable<EXPERIENCE> {
    return this.http
      .post<EXPERIENCE>(
        `/api/fields/create/experience`,
        experience,
        httpOptions
      )
      .pipe(
        tap(data => console.log(`experience: ${data}`)),
        catchError(error => {
          console.log(`the error is ${error}`);
          return of(error);
        })
      );
  }

  createEducation(experience: EDUCATION): Observable<EDUCATION> {
    return this.http
      .post<EDUCATION>(`/api/fields/create/education`, experience, httpOptions)
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
}
