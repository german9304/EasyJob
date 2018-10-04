import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "education",
  templateUrl: "./education.component.html",
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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
