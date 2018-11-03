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

  async uploadResume(file): Promise<FILE> {
    const option = this.auth.UserHeaders;
    console.log("file upload resume: ", file);
    const credentials: USER = this.auth.getUserCredentials() as USER;
    const { jwt }: { jwt: string } = credentials;
    const formData: FormData = new FormData();
    formData.append("file", file);
    const data: Response = await fetch("/api/files/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      body: formData
    });
    const fileInfo: FILE = await data.json();
    //console.log(fileInfo);
    return fileInfo;
  }

  createPromiseOptions(method: string, Authorization: string, body: FormData){
    return {
      method,
       headers:{
        Authorization
       },
      body
    }
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

interface PROMISEOPTIONS{
  method: string
  headers:{
    Authorization: string
  },
  body: FormData
}