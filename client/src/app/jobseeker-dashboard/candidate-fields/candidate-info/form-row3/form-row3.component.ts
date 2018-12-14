import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-row3',
  templateUrl: './form-row3.component.html',
  styleUrls: [
    '../../shared-profile-fields.component.scss',
    './form-row3.component.css'
  ]
})
export class FormRow3Component implements OnInit {
  contactInfo = this.fb.group({
    email: [''],
    phone: ['']
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
