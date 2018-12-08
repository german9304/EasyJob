import { Injectable } from '@angular/core';
import { JOB, SKILL } from '../job';
import { observable, Observable, of } from 'rxjs';
@Injectable()
export class EmployerService {
  JOBS: JOB[] = [];
  types: string[] = [
    'select one',
    'full time',
    'part time',
    'contract',
    'temporary',
    'internship'
  ];
  constructor() {}
  createJob(job: JOB): Observable<JOB> {
    return of(job);
  }
  updateJob(job: JOB, id: number): Observable<JOB> {
    return of(job);
  }

  getJObs(): Observable<JOB[]> {
    return of(this.JOBS);
  }
}
