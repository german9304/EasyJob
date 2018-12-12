import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { JOB } from '../../job';
import { JobDataService } from '../../services/job-data.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  @Input()
  jobs: JOB[];
  TEST = 'TESTING SPAN';
  @Output()
  add: EventEmitter<JOB> = new EventEmitter<JOB>();

  constructor(private js: JobDataService) {}

  ngOnInit() {}
  getWord(word: string) {
    this.js.searchWord(word);
  }
  clickAdd(job: JOB) {
    // console.log(job);
    this.add.emit(job);
  }
}
