import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { map, filter } from "rxjs/operators";
import { EXPERIENCE, FIELDS, EDUCATION } from "../../../job";
import { CandidateFieldsService } from "../../candidate-fields.service";
import {
  Router,
  ActivatedRoute,
  ActivationStart,
  ActivationEnd,
  ChildActivationStart,
  ChildActivationEnd
} from "@angular/router";
import { List, Map } from "immutable";

@Component({
  selector: "candidate-profile",

  // templateUrl: "./candidate-profile.component.html",
  template: `
    <div class="candidateprofile">
      <candidate-profile-view 
      [experience]="fields.EXPERIENCE" 
      [education]="fields.EDUCATION"
       [trackByExp]="trackByExperience">
      </candidate-profile-view>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [
    // "../shared-profile-fields.component.scss",
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
        this.fields.EXPERIENCE = List<EXPERIENCE>(experience);
        this.fields.EDUCATION = List<EDUCATION>(education);
      }
      console.log("ng init");
    });
    // this.router.events
    //   .pipe(filter(route => route instanceof ChildActivationStart))
    //   .subscribe(event => console.log(event));
    // this.router.events
    //   .pipe(filter(route => route instanceof ChildActivationEnd))
    //   .subscribe(event => console.log(event));
    //this.route.paramMap.subscribe(param => console.log(param));
  }
  trackByExperience(index: number, experience: EXPERIENCE): string {
    //console.log(`id: ${experience._id}`);
    return experience._id;
  }
}
