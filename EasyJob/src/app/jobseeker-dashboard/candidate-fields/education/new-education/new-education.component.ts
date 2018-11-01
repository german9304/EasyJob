import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EDUCATION } from "../../../../job";
import { CandidateFieldsService } from "../../../services/candidate-fields.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "new-education",
  templateUrl: "./new-education.component.html",
  styleUrls: [
    "../../shared-profile-fields.component.scss",
    "./new-education.component.scss"
  ]
})
export class NewEducationComponent implements OnInit {
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
    private fb: FormBuilder,
    private fs: CandidateFieldsService
  ) {}

  ngOnInit() {}
  addEducation() {
    const { value } = this.educationForm;
    this.fs.createEducation(value).subscribe((res: EDUCATION) => {
      console.log(res);
      console.log(`res inside ${JSON.stringify(res)}`);
      console.log(this.fs.EDUCATION === this.fs.EDUCATION.push(res));
      this.fs.EDUCATION = this.fs.EDUCATION.push(res);
      this.educationForm.reset();
      this.router.navigate(["../jobseeker/profile"]);
    });
  }
}
