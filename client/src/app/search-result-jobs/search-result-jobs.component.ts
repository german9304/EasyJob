import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JobDataService } from '../services/job-data.service';
import { tap, map, switchMap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { JOB } from '../job';
import { DataFieldsService } from '../jobseeker-dashboard/services/data-fields.resolver.service';

@Component({
  selector: 'app-search-result-jobs',
  templateUrl: './search-result-jobs.component.html',
  styleUrls: ['./search-result-jobs.component.css']
})
export class SearchResultJobsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
