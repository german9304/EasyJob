import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  JOBS = [];
  types: string[] = [
    'select one',
    'full time',
    'part time',
    'contract',
    'temporary',
    'internship'
  ];
  constructor() {}
  createJob() {}
}
