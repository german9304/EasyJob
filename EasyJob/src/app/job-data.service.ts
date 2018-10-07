import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

import { CATEGORY, JOB } from "./job";

@Injectable()
export class JobDataService {
  jobcreateUrl: string = ``;
  constructor(private http: HttpClient) {}

  createAJob(job): Observable<any> {
    return;
  }
  searchCategories(data: string): Observable<CATEGORY[]> {
    console.log(data);
    if (!data.trim()) {
      return of([]);
    }
    // console.log("res: ", data);
    return this.http
      .get<CATEGORY[]>(`api/job/categories?search=${data}`)
      .pipe(tap(data => console.log(data), catchError(err => of(err))));
  }

  getJobs({ field, location }): Observable<JOB[]> {
    return this.http
      .get<JOB[]>(`api/candidate/jobs?search=${field}&location=${location}`)
      .pipe(tap(data => console.log(data), catchError(err => of(err))));
  }

  goHome(field: string, location: string): boolean {
    return !field.trim() && !location.trim();
  }

  searchWord(word: string) {
    // console.log(word);
  }
}
