import { Component, OnInit, Input } from "@angular/core";
import { JOB } from "../../../job";
@Component({
  selector: "job-serch-list",
  templateUrl: "./job-serch-list.component.html",
  styleUrls: ["./job-serch-list.component.scss"]
})
export class JobSerchListComponent implements OnInit {
  @Input('jobs')
  JOBS: JOB[];
  constructor() {}

  ngOnInit() {}
}
