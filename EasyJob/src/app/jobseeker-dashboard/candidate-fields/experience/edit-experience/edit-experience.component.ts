import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { EXPERIENCE } from "../../../../job";
import { CandidateFieldsService } from "../../../candidate-fields.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "edit-experience",
  templateUrl: "./edit-experience.component.html",
  styleUrls: [
    "../../shared-profile-fields.component.scss",
    "./edit-experience.component.scss"
  ]
})
export class EditExperienceComponent implements OnInit {
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
  submitForm() {
    const { value } = this.experienceForm;
    console.log(value);
  }
}
