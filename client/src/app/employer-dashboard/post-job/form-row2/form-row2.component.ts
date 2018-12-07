import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-row2',
  templateUrl: './form-row2.component.html',
  styleUrls: ['../post-job.component.css', './form-row2.component.css']
})
export class FormRow2Component implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
