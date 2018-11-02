import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EDUCATION, FIELDS } from "../../../../job";
import { CandidateFieldsService } from "../../../services/candidate-fields.service";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { FieldsService } from "../../../services/fields.service";
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
    private cfs: CandidateFieldsService,
    private fieldServiceEducation: FieldsService<EDUCATION>,
    private fields: FieldsService<FIELDS>
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
    // const { value } = this.educationForm;
    // const { _id } = this;
    // this.cfs
    //   .updateEducation(_id, value)
    //   .pipe(
    //     switchMap(data => {
    //       //console.log(`data received: ${JSON.stringify(data)}`);
    //       return this.cfs.getFields();
    //     })
    //   )
    //   .subscribe(({ education }: FIELDS) => {
    //     this.cfs.EDUCATION = List<EDUCATION>(education);
    //     this.cfs.goBackToProfile();
    //   });
    const { value }: { value: EDUCATION } = this.educationForm;
    const { _id }: { _id: string } = this;
    const url: string = `/api/fields/education/${_id}`;
    this.fieldServiceEducation
      .updateField(url, value)
      .pipe(
        switchMap(data => {
          //console.log(`data received: ${JSON.stringify(data)}`);
          return this.fields.getFields();
        })
      )
      .subscribe(({ education }: FIELDS) => {
        this.fieldServiceEducation.EDUCATION = List<EDUCATION>(education);
        this.fieldServiceEducation.goBackToProfile();
      });
  }
  delete() {
    // const { value } = this.educationForm;
    const { _id } = this;
    console.log(this.educationForm.value);
    this.cfs
      .deleteEducation(_id)
      .pipe(
        switchMap(data => {
          //console.log(`data received: ${JSON.stringify(data)}`);
          return this.cfs.getFields();
        })
      )
      .subscribe(({ education }: FIELDS) => {
        this.cfs.EDUCATION = List<EDUCATION>(education);
        this.cfs.goBackToProfile();
      });
    console.log("delete");
  }
}
