import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-education-view',
  templateUrl: './education-view.component.html',
  styleUrls: [
    '../../shared-profile-fields.component.scss',
    './education-view.component.css'
  ]
})
export class EducationViewComponent implements OnInit {
  @Input()
  educationForm: FormGroup;
  @Output()
  educationCeate: EventEmitter<null> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  submitForm() {
    this.educationCeate.emit(null);
  }
}
