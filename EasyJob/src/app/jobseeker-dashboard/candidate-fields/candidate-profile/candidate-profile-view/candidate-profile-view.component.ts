import { Component, OnInit, Input } from "@angular/core";
import { EXPERIENCE, EDUCATION } from "../../../../job";
import { List, Map } from "immutable";
@Component({
  selector: "candidate-profile-view",
  templateUrl: "./candidate-profile-view.component.html",
  styleUrls: ["./candidate-profile-view.component.scss"]
})
export class CandidateProfileViewComponent implements OnInit {
  @Input()
  experience: List<EXPERIENCE>;
  @Input()
  education: List<EDUCATION>;
  @Input()
  trackByExp;
  constructor() {}

  ngOnInit() {}
}
