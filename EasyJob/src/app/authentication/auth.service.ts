import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import {USER} from "./user"
import {HttpClient} from "@angular/common/http"
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class AuthService {
  isLoggedin: boolean = false;
  url: string = `/api`;
  googleUrl: string = `/auth/google`;
  constructor(private http: HttpClient) { }
  
  authenticate(user: USER): Observable<USER>{
    return this.http.post<USER>(this.url,user,httpOptions);
  }
  getGoogleUSER(): Observable<any>{
  	return this.http.get<any>(this.googleUrl);
  }

}
