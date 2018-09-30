import { Component, OnInit, Input } from "@angular/core";
import { EXPERIENCE } from "../../../job";
@Component({
  selector: "education-list",
  templateUrl: "./education-list.component.html",
  styleUrls: ["../shared-fields-style.scss", "./education-list.component.scss"]
})
export class EducationListComponent implements OnInit {
  @Input()
  EXPERIENCE: EXPERIENCE[];
  constructor() {}

  ngOnInit() {}
}
