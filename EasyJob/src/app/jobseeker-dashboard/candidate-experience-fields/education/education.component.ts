import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['../shared-profile-fields.component.scss','./education.component.css']
})
export class EducationComponent implements OnInit {
 educationForm = this.fb.group({
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
