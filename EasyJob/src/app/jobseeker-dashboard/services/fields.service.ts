import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EXPERIENCE, FIELDS, EDUCATION } from '../../job';
import { Observable, of, throwError } from 'rxjs';
import { List, Map } from 'immutable';
import { AuthService } from '../../services/auth.service';
import { tap, catchError } from 'rxjs/operators';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Injectable()
export class FieldsService<T> {
  EXPERIENCE: List<T> = List();
  EDUCATION: List<T> = List();
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  createField(url: string, field: T): Observable<T> {
    return this.http.post<T>(url, field, this.auth.UserHeaders).pipe(
      tap(data => console.log(`field ${JSON.stringify(data)}`)),
      catchError(error => {
        console.log(`the error is ${error}`);
        return this.handleError(error);
      })
    );
  }

  updateField(url: string, field: T): Observable<T> {
    return this.http.put<T>(url, field, this.auth.UserHeaders).pipe(
      tap(data => console.log(`experience: ${data}`)),
      catchError(error => {
        console.log(`the error is ${error}`);
        return this.handleError(error);
      })
    );
  }

  deleteField(url: string): Observable<T> {
    return this.http.delete<T>(url, this.auth.UserHeaders).pipe(
      tap(data => console.log(`experience: ${data}`)),
      catchError(error => {
        console.log(`the error is ${error}`);
        return this.handleError(error);
      })
    );
  }

  getField(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      tap(data => console.log(`experience: ${data}`)),
      catchError(error => {
        console.log(`the error is ${error}`);
        return this.handleError(error);
      })
    );
  }

  getFields(): Observable<T> {
    return this.http.get<T>(`/api/fields/candidate`).pipe(
      tap(fields => {
        console.log(`fields: ${fields}`);
      }),
      catchError(error => {
        console.log(`the error is ${error}`);
        return of(error);
      })
    );
  }

  goBackToProfile() {
    this.router.navigate(['../jobseeker/profile']);
  }
  private handleError(error: HttpErrorResponse) {
    console.log(`error ${error.error} ${error.status}`);
    return throwError('Something bad happened; please try again later.');
  }
}
