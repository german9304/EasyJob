import { Component, OnInit, Input } from "@angular/core";
import { EXPERIENCE } from "../../../job";
@Component({
  selector: "experience-list",
  templateUrl: "./experience-list.component.html",
  styleUrls: ["../shared-fields-style.scss", "./experience-list.component.scss"]
})
export class ExperienceListComponent implements OnInit {
  @Input()
  EXPERIENCE: EXPERIENCE[];
  constructor() {}

  ngOnInit() {}
}
