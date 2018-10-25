import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { EXPERIENCE, FIELDS } from "../../../../job";
import { CandidateFieldsService } from "../../../candidate-fields.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { List, Map } from "immutable";
@Component({
  selector: "edit-experience",
  templateUrl: "./edit-experience.component.html",
  styleUrls: [
    "../../shared-profile-fields.component.scss",
    "./edit-experience.component.scss"
  ]
})
export class EditExperienceComponent implements OnInit {
  _id: string;
  experienceForm = this.fb.group({
    position: [""],
    company: [""],
    location: [""],
    date: this.fb.group({
      start: [""],
      end: [""]
    }),
    description: [""]
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private fs: CandidateFieldsService
  ) {}

  ngOnInit() {
    this.updateExperience();
    this.route.paramMap.subscribe(param => (this._id = param.get("id")));
  }
  updateExperience() {
    this.route.data.subscribe(({ field }) => {
      const { position, company, location, date, description } = field;
      this.experienceForm.setValue({
        position,
        company,
        location,
        date,
        description
      });
    });
  }
  save() {
    const { value } = this.experienceForm;
    const { _id } = this;
    this.fs
      .updateExperience(_id, value)
      .pipe(
        switchMap(data => {
          //console.log(`data received: ${JSON.stringify(data)}`);
          return this.fs.getFields();
        })
      )
      .subscribe(({ experience }: FIELDS) => {
        this.fs.EXPERIENCE = List<EXPERIENCE>(experience);
        this.fs.goBackToProfile();
      });
  }
  delete() {
    // const { value } = this.experienceForm;
    const { _id } = this;
    console.log(this.experienceForm.value);
    this.fs
      .deleteExperience(_id)
      .pipe(
        switchMap(data => {
          //console.log(`data received: ${JSON.stringify(data)}`);
          return this.fs.getFields();
        })
      )
      .subscribe(({ experience }: FIELDS) => {
        this.fs.EXPERIENCE = List<EXPERIENCE>(experience);
        this.fs.goBackToProfile();
      });
    console.log("delete");
  }
}
