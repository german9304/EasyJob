import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployerService } from '../../employer.service';
@Component({
  selector: 'app-form-row2',
  templateUrl: './form-row2.component.html',
  styleUrls: ['../post-job.component.css', './form-row2.component.css']
})
export class FormRow2Component implements OnInit {
  @Input() parentForm: FormGroup;
  constructor(private es: EmployerService) {}

  ngOnInit() {}
}
