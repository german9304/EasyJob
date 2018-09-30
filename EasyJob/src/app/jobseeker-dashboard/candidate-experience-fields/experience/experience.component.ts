import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

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
    startDate: [""],
    endDate: [""],
    description: [""]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.experienceForm.valueChanges.subscribe(values => {
      console.log(values);
    });
  }
  Submit() {
    const { value } = this.experienceForm;
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
