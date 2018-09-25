import { Component, OnInit, Input } from "@angular/core";

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
