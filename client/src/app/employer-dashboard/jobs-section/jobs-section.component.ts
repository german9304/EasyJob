import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { JOB } from '../../job';
import { Observable } from 'rxjs';
import { POSTEDJOBS, name } from '../mock-data';

@Component({
  selector: 'app-jobs-section',
  templateUrl: './jobs-section.component.html',
  styleUrls: ['../shared-jobs-candidates.css', './jobs-section.component.css']
})
export class JobsSectionComponent implements OnInit {
  JOBS: JOB[] = [];

  constructor(private employerService: EmployerService) {}

  ngOnInit() {
    this.getEmployerJobs();
    console.log(this.jobsTitle);
  }
  getEmployerJobs(): void {
    this.employerService
      .getJobs()
      .subscribe((jobs: JOB[]) => (this.JOBS = jobs));
  }

  get jobsTitle(): string {
    const { JOBS } = this;
    return JOBS.length ? `(${JOBS.length}) Jobs` : 'No Jobs Found';
  }
}
