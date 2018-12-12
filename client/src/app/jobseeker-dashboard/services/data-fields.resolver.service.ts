import { Injectable } from '@angular/core';
import { EXPERIENCE, FIELDS } from '../../job';
import { Observable } from 'rxjs';
import { CandidateFieldsService } from './candidate-fields.service';
import { FieldsService } from './fields.service';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
@Injectable()
export class DataFieldsService implements Resolve<FIELDS> {
  constructor(
    private cf: CandidateFieldsService,
    private fs: FieldsService<FIELDS>
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FIELDS> {
    // this.fs.getFields().subscribe(fields => {
    //   console.log(`fields in data resolver: ${JSON.stringify(fields)}`);
    // });
    return this.fs.getFields();
  }
}
