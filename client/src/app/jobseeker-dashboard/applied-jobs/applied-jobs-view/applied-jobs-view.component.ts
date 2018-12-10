import { Component, OnInit, Input } from '@angular/core';
import { JOB } from '../../../job';
@Component({
  selector: 'app-applied-jobs-view',
  templateUrl: './applied-jobs-view.component.html',
  styleUrls: ['../../jobs-style.css', './applied-jobs-view.component.css']
})
export class AppliedJobsViewComponent implements OnInit {
  @Input() job: JOB;
  title: string;
  location: string;
  company: string;
  constructor() {}

  ngOnInit() {
    const { title, company, location } = this.job;
    console.log(this.job);
    this.title = title;
    this.location = location;
    this.company = company;
  }
}
