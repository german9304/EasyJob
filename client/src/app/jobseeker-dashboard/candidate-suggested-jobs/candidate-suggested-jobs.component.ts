import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { USER } from '../../user';
import { CandidateJobsService } from '../services/candidate-jobs.service';
import { JOB } from '../../job';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './candidate-suggested-jobs.component.html',
  styleUrls: ['./candidate-suggested-jobs.component.css']
})
export class CandidateSuggestedJobsComponent implements OnInit {
  suggested: JOB[];
  constructor(private auth: AuthService, private js: CandidateJobsService) {}

  ngOnInit() {
    this.suggestedJobs();
    console.log(this.suggested);
  }
  suggestedJobs() {
    return this.js.suggestedJobs.subscribe(jobs => (this.suggested = jobs));
  }
}
