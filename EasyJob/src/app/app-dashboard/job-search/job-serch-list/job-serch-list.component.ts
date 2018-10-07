import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { JOB } from "../../../job";
import { JobDataService } from "../../../job-data.service";
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
  add: EventEmitter<any> = new EventEmitter<any>();

  constructor(private js: JobDataService) {}

  ngOnInit() {}
  getWord(word: string) {
    this.js.searchWord(word);
  }
  clickAdd() {
    this.add.emit(null);
  }
}
