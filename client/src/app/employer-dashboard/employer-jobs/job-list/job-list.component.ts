import { Component, OnInit, Input } from '@angular/core';
import { JOB } from '../../../job';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  @Input() JOBS: JOB[];
  constructor() {}

  ngOnInit() {}
}
