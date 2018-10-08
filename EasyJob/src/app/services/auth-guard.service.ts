import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route
} from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    const credentials = this.auth.getUserCredentials();
    console.log(`param ${JSON.stringify(route.paramMap)}`);
    if (credentials) {
      return true;
    }
    this.router.navigate(["/account/login"]);
    return false;
  }
}
