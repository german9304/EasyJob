import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-row2',
  templateUrl: './form-row2.component.html',
  styleUrls: [
    '../../shared-profile-fields.component.scss',
    './form-row2.component.css'
  ]
})
export class FormRow2Component implements OnInit {
  profileInfo = this.fb.group({
    education: [''],
    position: [''],
    description: ['']
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
