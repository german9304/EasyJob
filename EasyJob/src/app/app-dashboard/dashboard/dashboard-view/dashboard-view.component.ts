import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { StyleServiceService } from "../../../style-service.service";
import { CATEGORY } from "../../../job";
@Component({
  selector: "dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.scss"]
})
export class DashboardViewComponent implements OnInit {
  @Input()
  searchForm: FormGroup;
  @Input("categories")
  CATEGORIES: CATEGORY[];
  @Output()
  clickInputSearch = new EventEmitter<null>();
  @Output()
  catClick = new EventEmitter<string>();
  imgurl1: string = "../../assets/resume.jpg";
  imgurl2: string = "../../assets/searchjobs.jpg";
  constructor(private sts: StyleServiceService) {}

  ngOnInit() {}
  clickCat(data: string){
    this.catClick.emit(data);
  }
  showList(){
    
  }
}





