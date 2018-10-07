import { Component, OnInit, Input } from "@angular/core";
import { EDUCATION } from "../../../job";

@Component({
  selector: "education-list",
  templateUrl: "./education-list.component.html",
  styleUrls: ["../shared-fields-style.scss", "./education-list.component.scss"]
})
export class EducationListComponent implements OnInit {
  @Input()
  EDUCATION: EDUCATION[];
  constructor() {}

  ngOnInit() {}
}
