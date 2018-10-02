import { Component, OnInit, Input } from "@angular/core";
import { EXPERIENCE } from "../../../job";
@Component({
  selector: "experience-list",
  templateUrl: "./education-list.component.html",
  styleUrls: ["../shared-fields-style.scss", "./experience-list.component.scss"]
})
export class EducationListComponent implements OnInit {
  @Input()
  EXPERIENCE: EXPERIENCE[];
  constructor() {}

  ngOnInit() {}
}
