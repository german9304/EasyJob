import { Injectable } from '@angular/core';
import { EXPERIENCE, EDUCATION, FIELDS } from '../../job';
import { Observable } from 'rxjs';
import { CandidateFieldsService } from '.././services/candidate-fields.service';
import { FieldsService } from '.././services/fields.service';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
@Injectable()
export class GetExperienceFieldService implements Resolve<EXPERIENCE> {
  constructor(private fs: FieldsService<EXPERIENCE>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EXPERIENCE> {
    const id: string = route.paramMap.get('id');
    const url = `/api/fields/experience/${id}`;
    return this.fs.getField(url);
  }
}
