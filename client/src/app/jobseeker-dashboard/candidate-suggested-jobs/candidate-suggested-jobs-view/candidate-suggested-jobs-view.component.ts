import { Component, OnInit, Input } from '@angular/core';
import { JOB } from '../../../job';
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './candidate-suggested-jobs-view.component.html',
  styleUrls: ['./candidate-suggested-jobs-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  @Input() job: JOB;
  title: string;
  location: string;
  company: string;
  type: string;
  constructor() {}

  ngOnInit() {
    const { title, location, company, type } = this.job;
    this.title = title;
    this.location = location;
    this.company = company;
    this.type = type;
    // console.log(
    //   `title: ${title}, location: ${location}, company: ${company}, type:${type}`
    // );
  }
}
