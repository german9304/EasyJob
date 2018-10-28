import { Injectable } from "@angular/core";
import { EXPERIENCE, EDUCATION, FIELDS } from "../../job";
import { Observable } from "rxjs";
import { CandidateFieldsService } from ".././candidate-fields.service";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

@Injectable()
export class GetEducationFieldService implements Resolve<EDUCATION> {
  constructor(private fs: CandidateFieldsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EDUCATION> {
    const id = route.paramMap.get("id");

    return this.fs.getEducation(id);
  }
}
