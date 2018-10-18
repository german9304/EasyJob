import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { map, take } from "rxjs/operators";

import { USER } from "../user";

@Injectable()
export class DataResolverService implements Resolve<USER> {
  constructor(private auth: AuthService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<USER> | any {
    return this.auth.getUSER().pipe(
      take(1),
      map(user => {
        const credentials = this.auth.getUserCredentials();
        if (user) {
          if (!credentials) {
            this.auth.createUserCredentials(user);
          }
          return this.router.navigate(["/jobseeker"]);
        } else {
          if (credentials) {
            this.auth.clearCredentials();
          }
          return null;
        }
      })
    );
  }
}
