import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { JOB } from '../../job';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs-section',
  templateUrl: './jobs-section.component.html',
  styleUrls: ['../shared-jobs-candidates.css', './jobs-section.component.css']
})
export class JobsSectionComponent implements OnInit {
  JOBS: JOB[];

  constructor(private employerService: EmployerService) {}

  ngOnInit() {
    this.getEmployerJobs();
  }
  getEmployerJobs(): void {
    this.employerService
      .getJObs()
      .subscribe((jobs: JOB[]) => (this.JOBS = jobs));
  }
}
