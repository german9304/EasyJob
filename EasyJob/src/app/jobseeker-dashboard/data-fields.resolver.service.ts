import { Injectable } from "@angular/core";
import { EXPERIENCE, FIELDS } from "../job";
import { Observable } from "rxjs";
import { CandidateFieldsService } from "./candidate-fields.service";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
@Injectable()
export class DataFieldsService implements Resolve<FIELDS> {
  constructor(private cf: CandidateFieldsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FIELDS> {
    return this.cf.getExperience();
  }
}
