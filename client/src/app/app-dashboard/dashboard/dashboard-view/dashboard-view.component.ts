import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StyleServiceService } from '../../../services/style-service.service';
import { CATEGORY } from '../../../job';
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  @Input()
  searchForm: FormGroup;
  @Input()
  categories: CATEGORY[];
  @Output()
  clickInputSearch = new EventEmitter<null>();
  @Output()
  catClick = new EventEmitter<string>();
  @Output()
  search: EventEmitter<null> = new EventEmitter<null>();

  imgurl1 = '../../assets/resume.jpg';
  imgurl2 = '../../assets/searchjobs.jpg';
  constructor(private sts: StyleServiceService) {}

  ngOnInit() {}
  clickCat(data: string) {
    this.catClick.emit(data);
  }
  showList() {}

  searchJobs() {
    this.search.emit(null);
  }
}
