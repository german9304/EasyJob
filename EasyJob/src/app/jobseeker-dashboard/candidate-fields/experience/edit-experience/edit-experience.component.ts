import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { EXPERIENCE } from "../../../../job";
import { CandidateFieldsService } from "../../../candidate-fields.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
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
    this.route.paramMap.subscribe(param => (this._id = param.get("id")));
  }
  save() {
    const { value } = this.experienceForm;
    const { _id } = this;
    this.fs.updateExperience(_id, value).subscribe(data => console.log(data));
  }
  delete() {
    // const { value } = this.experienceForm;
    // console.log(this.experienceForm);
    // console.log("delete");
  }
}
