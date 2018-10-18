import { Component, OnInit } from "@angular/core";
import { map, filter } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION } from "../../../job";
import { CandidateFieldsService } from "../../candidate-fields.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "candidate-profile",
  templateUrl: "./candidate-profile.component.html",
  styleUrls: [
    "../shared-profile-fields.component.scss",
    "./candidate-profile.component.css"
  ]
})
export class CandidateProfileComponent implements OnInit {
  // MOCK_LIST: EDUCATION[] = [
  //   {
  //     _id: "123",
  //     school: "CSU CHICO",
  //     degree: "Compuer Science",
  //     majorField: "Google",
  //     date: { start: "01/2000", end: "02/2005" },
  //     description: "I work For 3 months"
  //   },
  //   {
  //     _id: "123",
  //     school: "CSU SACRAMENTO",
  //     degree: "Business",
  //     majorField: "Google",
  //     date: { start: "01/2000", end: "02/2005" },
  //     description: "I work For 3 months"
  //   }
  // ];

  // EXPERIENCE: EXPERIENCE[] = this.fields.EXPERIENCE;
  constructor(
    private fields: CandidateFieldsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { CandidateFields: FIELDS }) => {
      console.log(data);
      if (data) {
        const {
          CandidateFields: { experience, education }
        } = data;

        // console.log(this.fields);
        // this.fields.EXPERIENCE = experience;
        // this.fields.EDUCATION = education;
      }
      //this.router.navigate(["/user"]);
    });
  }
}
