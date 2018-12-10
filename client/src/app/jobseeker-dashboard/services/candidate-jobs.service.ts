import { Injectable } from '@angular/core';
import { JOB } from '../../job';
import { JOBS } from '../mock-data';
import { Observable, of } from 'rxjs';
@Injectable()
export class CandidateJobsService {
  jobs: JOB[] = JOBS;
  constructor() {}

  get candidateJobs(): Observable<JOB[]> {
    return of(this.jobs);
  }
}
