import { Injectable } from "@angular/core";
import { EXPERIENCE, EDUCATION, FIELDS } from "../../job";
import { Observable } from "rxjs";
import { FieldsService } from ".././services/fields.service";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

@Injectable()
export class GetEducationFieldService implements Resolve<EDUCATION> {
  constructor(private fs: FieldsService<EDUCATION>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EDUCATION> {
    const id = route.paramMap.get("id");
    const url: string = `/api/fields/education/${id}`;
    return this.fs.getField(url);
  }
}
