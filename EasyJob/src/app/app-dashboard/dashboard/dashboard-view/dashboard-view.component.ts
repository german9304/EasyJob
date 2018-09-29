import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.css"]
})
export class DashboardViewComponent implements OnInit {
  @Input()
  searchForm: FormGroup;
  @Output()
  search = new EventEmitter<null>();

  imgurl1: string = "../../assets/resume.jpg";
  imgurl2: string = "../../assets/searchjobs.jpg";

  constructor() {}

  ngOnInit() {}
}
