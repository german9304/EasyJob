import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-row1',
  templateUrl: './form-row1.component.html',
  styleUrls: ['./form-row1.component.css']
})
export class FormRow1Component implements OnInit {
  profileInfo = this.fb.group({
    email: [''],
    phone: ['']
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
