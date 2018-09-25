import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrls: ['./experience-view.component.scss']
})
export class ExperienceViewComponent implements OnInit {
 @Input() expForm: FormGroup;
 @Input() position: FormControl;
 @Input() company: FormControl;
 @Input() location:  FormControl;
 @Input() startDate: FormControl;
 @Input() endDate: FormControl;
 @Input() description: FormControl;
 @Output() submitExperience: EventEmitter<any>  = new EventEmitter();
  constructor() { }

  ngOnInit() {
  	console.log('expform: ',this.expForm);
  	// console.log('position: ',this.position);
  }
  submitForm(){
    this.submitExperience.emit(null);
  }

}
