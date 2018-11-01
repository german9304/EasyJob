import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EDUCATION, FIELDS } from "../../../../job";
import { CandidateFieldsService } from "../../../services/candidate-fields.service";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { List, Map } from "immutable";

@Component({
  selector: "edit-education",
  templateUrl: "./edit-education.component.html",
  styleUrls: [
    "../../shared-profile-fields.component.scss",
    "./edit-education.component.scss"
  ]
})
export class EditEducationComponent implements OnInit {
  _id: string;
  educationForm = this.fb.group({
    school: [""],
    degree: [""],
    majorField: [""],
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
    this.updateEducation();
    this.route.paramMap.subscribe(param => (this._id = param.get("id")));
  }

  updateEducation() {
    this.route.data.subscribe(({ field }) => {
      const { school, degree, majorField, date, description } = field;
      this.educationForm.setValue({
        school,
        degree,
        majorField,
        date,
        description
      });
    });
  }

  save() {
    const { value } = this.educationForm;
    const { _id } = this;
    this.fs
      .updateEducation(_id, value)
      .pipe(
        switchMap(data => {
          //console.log(`data received: ${JSON.stringify(data)}`);
          return this.fs.getFields();
        })
      )
      .subscribe(({ education }: FIELDS) => {
        this.fs.EDUCATION = List<EDUCATION>(education);
        this.fs.goBackToProfile();
      });
  }
  delete() {
    // const { value } = this.educationForm;
    const { _id } = this;
    console.log(this.educationForm.value);
    this.fs
      .deleteEducation(_id)
      .pipe(
        switchMap(data => {
          //console.log(`data received: ${JSON.stringify(data)}`);
          return this.fs.getFields();
        })
      )
      .subscribe(({ education }: FIELDS) => {
        this.fs.EDUCATION = List<EDUCATION>(education);
        this.fs.goBackToProfile();
      });
    console.log("delete");
  }
}
