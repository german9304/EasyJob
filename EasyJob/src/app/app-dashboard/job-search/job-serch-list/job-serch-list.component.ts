import { Component, OnInit, Input } from "@angular/core";
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
  constructor(private js: JobDataService) {}

  ngOnInit() {}
  getWord(word: string) {
    this.js.searchWord(word);
  }
}
