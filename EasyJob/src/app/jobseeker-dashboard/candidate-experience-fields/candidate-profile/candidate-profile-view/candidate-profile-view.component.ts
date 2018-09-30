import { Component, OnInit, Input } from "@angular/core";
import { EXPERIENCE } from "../../../../job";
@Component({
  selector: "candidate-profile-view",
  templateUrl: "./candidate-profile-view.component.html",
  styleUrls: ["./candidate-profile-view.component.scss"]
})
export class CandidateProfileViewComponent implements OnInit {
  @Input()
  experience: EXPERIENCE[];
  constructor() {}

  ngOnInit() {}
}
