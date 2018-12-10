import { Component, OnInit } from '@angular/core';
import { CandidateJobsService } from '../services/candidate-jobs.service';
import { JOB } from '../../job';
@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['../jobs-style.css', './applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  applied: JOB[];
  constructor(private js: CandidateJobsService) {}

  ngOnInit() {
    this.appliedJobs();
  }
  appliedJobs() {
    this.js.candidateJobs.subscribe(jobs => (this.applied = jobs));
  }
}
