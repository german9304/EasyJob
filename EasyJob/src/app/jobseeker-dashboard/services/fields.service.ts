import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EXPERIENCE, FIELDS, EDUCATION } from "../../job";
import { Observable, of, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class FieldService<T> {
  constructor(private http: HttpClient) {}

  getField(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      tap(data => console.log(`field ${JSON.stringify(data)}`)),
      catchError(error => {
        console.log(`the error is ${error}`);
        return this.handleError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(`error ${error.error} ${error.status}`);
    return throwError("Something bad happened; please try again later.");
  }
}
