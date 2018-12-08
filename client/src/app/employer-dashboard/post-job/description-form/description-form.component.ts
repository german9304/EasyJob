import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-description-form',
  templateUrl: './description-form.component.html',
  styleUrls: ['../post-job.component.css', './description-form.component.css']
})
export class DescriptionFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
