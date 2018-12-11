import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-row1',
  templateUrl: './form-row1.component.html',
  styleUrls: [
    '../../shared-profile-fields.component.scss',
    './form-row1.component.css'
  ]
})
export class FormRow1Component implements OnInit {
  profileInfo = this.fb.group({
    name: [''],
    headline: [''],
    location: ['']
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
