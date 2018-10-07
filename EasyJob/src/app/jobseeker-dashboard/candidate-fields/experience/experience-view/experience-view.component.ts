import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "experience-view",
  templateUrl: "./experience-view.component.html",
  styleUrls: [
    "../../shared-profile-fields.component.scss",
    "./experience-view.component.scss"
  ]
})
export class ExperienceViewComponent implements OnInit {
  @Input()
  expForm: FormGroup;
  @Output()
  submitExperience: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    // console.log('expform: ',this.expForm);
    // console.log('position: ',this.position);
  }
  submitForm() {
    this.submitExperience.emit(null);
  }
}
