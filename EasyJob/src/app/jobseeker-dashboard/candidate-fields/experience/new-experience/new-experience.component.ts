import { Component, OnInit, } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EXPERIENCE } from "../../../../job";
import { Router, ActivatedRoute } from "@angular/router";
import { FieldsService } from "../../../services/fields.service";

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
    private fieldServiceExperience: FieldsService<EXPERIENCE>
  ) {}

  ngOnInit() {
    // console.log('expform: ',this.expForm);
    // console.log('position: ',this.position);
  }
  submitForm() {
    const { value }: { value: EXPERIENCE } = this.experienceForm;
    // console.log(value);
    const url: string = "/api/fields/experience";
    this.fieldServiceExperience
      .createField(url, value)
      .subscribe((res: EXPERIENCE) => {
        //console.log(`res inside ${JSON.stringify(res)}`);
        console.log(
          this.fieldServiceExperience.EXPERIENCE ===
            this.fieldServiceExperience.EXPERIENCE.push(res)
        );
        this.fieldServiceExperience.EXPERIENCE = this.fieldServiceExperience.EXPERIENCE.push(
          res
        );
        this.experienceForm.reset();
        this.fieldServiceExperience.goBackToProfile();
      });
  }
}
