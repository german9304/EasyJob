import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "jobseeker-navbar-view",
  templateUrl: "./jobseeker-navbar-view.component.html",
  styleUrls: [
    "../../../jobseeker-employersharedstyle.scss",
    "./jobseeker-navbar-view.component.scss"
  ]
})
export class JobseekerNavbarViewComponent implements OnInit {
  @Input()
  email: string;
  @Input()
  searchForm: FormGroup;
  selected: boolean = false;
  selectedClasses: any;
  constructor() {}

  ngOnInit() {
    //console.log(this.email)
    this.selectedClasses = {
      remove: !this.selected,
      "profile-menu": this.selected
    };
  }
  clickArrow() {
    //console.log('click')
    this.selected = !this.selected;
    this.selectedClasses = {
      remove: !this.selected,
      "profile-menu": this.selected
    };
  }
}
