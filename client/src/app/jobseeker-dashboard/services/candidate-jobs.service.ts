import { Injectable } from '@angular/core';
import { JOB } from '../../job';
import { JOBS } from '../mock-data';
import { Observable, of } from 'rxjs';
@Injectable()
export class CandidateJobsService {
  suggested: JOB[] = JOBS;
  constructor() {}

  get suggestedJobs(): Observable<JOB[]> {
    return of(this.suggested);
  }
}
