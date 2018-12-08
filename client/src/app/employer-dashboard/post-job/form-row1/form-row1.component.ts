import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-row1',
  templateUrl: './form-row1.component.html',
  styleUrls: ['../post-job.component.css', './form-row1.component.css']
})
export class FormRow1Component implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
