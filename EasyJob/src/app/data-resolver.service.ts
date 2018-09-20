import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { map } from "rxjs/operators";

import { USER } from "./user";

@Injectable()
export class DataResolverService implements Resolve<USER> {
  constructor(private auth: AuthService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<USER> {
    return this.auth.getUSER();
  }
}
