import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { JOB } from "../../../job";
import { JobDataService } from "../../../services/job-data.service";
import { JobseekerRoutingModule } from "../../../jobseeker-dashboard/candidate-routing/jobseeker-routing.module";
@Component({
  selector: "job-serch-list",
  templateUrl: "./job-serch-list.component.html",
  styleUrls: ["./job-serch-list.component.scss"]
})
export class JobSerchListComponent implements OnInit {
  @Input("jobs")
  JOBS: JOB[];
  TEST = "TESTING SPAN";
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
