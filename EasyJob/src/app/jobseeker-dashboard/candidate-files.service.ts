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
export class CandidateFilesService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  get userResume() {
    return;
  }
}
