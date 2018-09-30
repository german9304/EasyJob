import { Component, OnInit } from "@angular/core";
import { map, filter } from "rxjs/operators";
import { EXPERIENCE, FIELDS } from "../../../job";
import { CandidateFieldsService } from "../../candidate-fields.service";
import {
  Router,
  ActivatedRoute,
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
    // {
    //   position: "Software Developer",
    //   company: "Google",
    //   location: "Monterey Bay",
    //   date: { start: "01/2000", end: "02/2005" },
    //   description: "I work For 3 months"
    // },
    // {
    //   position: "Back-End",
    //   company: "TEST",
    //   location: "Chico",
    //   date: { start: "02/12", end: "02/12" },
    //   description: "I work For 3 months"
    // }
  ];
  // EXPERIENCE: EXPERIENCE[] = this.fields.EXPERIENCE;
  constructor(
    private fields: CandidateFieldsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { fields: FIELDS }) => {
      console.log(data);
      if (data) {
        const {
          fields: { experience }
        } = data;
        this.fields.EXPERIENCE = experience;
      }
      //this.router.navigate(["/user"]);
    });
  }
}
