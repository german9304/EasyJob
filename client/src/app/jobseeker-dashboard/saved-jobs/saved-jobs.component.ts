import { Component, OnInit } from '@angular/core';
import { CandidateJobsService } from '../services/candidate-jobs.service';
import { JOB } from '../../job';
@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['../jobs-style.css', './saved-jobs.component.css']
})
export class SavedJobsComponent implements OnInit {
  applied: JOB[];
  constructor(private js: CandidateJobsService) {}

  ngOnInit() {
    this.js.candidateJobs.subscribe(jobs => (this.applied = jobs));
  }
}
