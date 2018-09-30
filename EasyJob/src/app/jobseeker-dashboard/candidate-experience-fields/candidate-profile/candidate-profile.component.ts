import { Component, OnInit } from "@angular/core";
import { map, filter } from "rxjs/operators";
import { EXPERIENCE } from "../../../job";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from "@angular/router";

@Component({
  selector: "candidate-profile",
  templateUrl: "./candidate-profile.component.html",
  styleUrls: [
    "../shared-profile-fields.component.scss",
    "./candidate-profile.component.css"
  ]
})
export class CandidateProfileComponent implements OnInit {
  MOCK_LIST: EXPERIENCE[] = [
    {
      position: "Software Developer",
      company: "Google",
      location: "Monterey Bay",
      date: { start: "01/2000", end: "02/2005" },
      description: "I work For 3 months"
    },
    {
      position: "Back-End",
      company: "TEST",
      location: "Chico",
      date: { start: "02/12", end: "02/12" },
      description: "I work For 3 months"
    }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
}
