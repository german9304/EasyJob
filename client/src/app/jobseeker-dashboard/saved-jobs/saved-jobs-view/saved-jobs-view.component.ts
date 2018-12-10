import { Component, OnInit, Input } from '@angular/core';
import { JOB } from '../../../job';
@Component({
  selector: 'app-saved-jobs-view',
  templateUrl: './saved-jobs-view.component.html',
  styleUrls: ['../../jobs-style.css', './saved-jobs-view.component.css']
})
export class SavedJobsViewComponent implements OnInit {
  @Input() job: JOB;
  title: string;
  location: string;
  company: string;
  constructor() {}

  ngOnInit() {
    const { title, company, location } = this.job;
    this.title = title;
    this.location = location;
    this.company = company;
  }
}
