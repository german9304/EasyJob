import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'education-view',
  templateUrl: './education-view.component.html',
  styleUrls: ['../../shared-profile-fields.component.scss','./education-view.component.css']
})
export class EducationViewComponent implements OnInit {
 @Input() educationForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
