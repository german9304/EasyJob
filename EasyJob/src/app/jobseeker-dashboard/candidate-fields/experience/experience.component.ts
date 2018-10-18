import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CandidateFieldsService } from "../../candidate-fields.service";
import { EXPERIENCE } from "../../../job";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: [
    "../shared-profile-fields.component.scss",
    "./experience.component.css"
  ]
})
export class ExperienceComponent implements OnInit {
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
    private fb: FormBuilder,
    private fs: CandidateFieldsService
  ) {}

  ngOnInit() {}
  Submit() {
    const { value } = this.experienceForm;
    this.fs.createExperience(value).subscribe((res: EXPERIENCE) => {
      console.log(`res inside ${res}`);
    });

    this.experienceForm.reset();
    this.router.navigate(["../jobseeker/profile"]);
  }
  get Position() {
    return this.experienceForm.get("position");
  }
  get Company() {
    return this.experienceForm.get("company");
  }
  get Location() {
    return this.experienceForm.get("location");
  }
  get StartDate() {
    return this.experienceForm.get("startDate");
  }
  get EndDate() {
    return this.experienceForm.get("endDate");
  }
  get Description() {
    return this.experienceForm.get("description");
  }
}
