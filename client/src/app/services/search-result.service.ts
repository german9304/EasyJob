import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ParamMap
} from '@angular/router';
import { JobDataService } from '../services/job-data.service';
import { JOB } from '../job';
import { Observable } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService implements Resolve<JOB[]> {
  constructor(
    private js: JobDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<JOB[]> {
    const field = route.paramMap.get('search');
    const location = route.paramMap.get('location');
    const obj = {
      field,
      location
    };
    return this.js.getJobs(obj).pipe(
      take(1),
      map(data => {
        if (data) {
          // console.log("map: ", data);
          return data;
        } else {
          return [];
        }
      })
    );
  }
}
