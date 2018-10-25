import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { EXPERIENCE } from "../../../../job";
import { CandidateFieldsService } from "../../../candidate-fields.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "new-experience",
  templateUrl: "./new-experience.component.html",
  styleUrls: [
    "../../shared-profile-fields.component.scss",
    "./new-experience.component.scss"
  ]
})
export class NewExperienceComponent implements OnInit {
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

  ngOnInit() {
    // console.log('expform: ',this.expForm);
    // console.log('position: ',this.position);
  }
  submitForm() {
    const { value } = this.experienceForm;
    console.log(value);
    this.fs.createExperience(value).subscribe((res: EXPERIENCE) => {
      console.log(`res inside ${JSON.stringify(res)}`);
      console.log(this.fs.EXPERIENCE === this.fs.EXPERIENCE.push(res));
      this.fs.EXPERIENCE = this.fs.EXPERIENCE.push(res);
      this.experienceForm.reset();
      this.fs.goBackToProfile();
    });
  }
}
