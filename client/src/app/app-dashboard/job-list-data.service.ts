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

@Injectable()
export class JobListDataService implements Resolve<JOB[]> {
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
    // return this.route.paramMap.pipe(
    //   switchMap((data: ParamMap) => {
    //     const field = data.get("search");
    //     const location = data.get("location");
    //     const obj = {
    //       field,
    //       location
    //     };
    //     console.log(obj);
    //     return this.js.getJobs(obj);
    //   })
    // );
  }
}
