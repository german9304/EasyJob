import { Injectable, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Router, Route, ActivatedRoute } from "@angular/router";

import { Observable, of, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION } from "../../job";
import { USER } from "../../user";
import { List, Map } from "immutable";
import { FILE } from ".././file";
import { AuthService } from "../../services/auth.service";

@Injectable()
export class CandidateFilesService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  uploadResume(file): Observable<FILE> {
    const option = this.auth.UserHeaders;
    return this.http.post<FILE>('',file,  option);
  }

  get userFileResume(): Observable<FILE> {
    return this.http.get<FILE>(`/api/files/resume`).pipe(
      catchError(err => {
        console.log(`the error is ${err}`);
        return of(err);
      })
    );
  }
}
