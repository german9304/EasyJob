import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CandidateFieldsService } from "../../services/candidate-fields.service";
import { EDUCATION } from "../../../job";
import { Router, ActivatedRoute } from "@angular/router";
import { FieldsService } from "../../services/fields.service";
@Component({
  selector: "education",
  // templateUrl: "./education.component.html",
  template: `
    <div id="profile-fields">
      <education-view 
      (educationCeate)="addEducation()" 
      [educationForm]="educationForm">
      </education-view>
    </div>
  `,
  styleUrls: [
    "../shared-profile-fields.component.scss",
    "./education.component.css"
  ]
})
export class EducationComponent implements OnInit {
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
    private cf: CandidateFieldsService,
    private fb: FormBuilder,
    private fs: FieldsService<EDUCATION>
  ) {}

  ngOnInit() {}
  addEducation() {
    const { value } = this.educationForm;

    this.cf.createEducation(value).subscribe((edu: EDUCATION) => {});
    this.educationForm.reset();
    this.router.navigate(["../jobseeker/profile"]);
  }
}
