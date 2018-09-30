import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { CATEGORY } from "../../job";
import { StyleServiceService } from "../../style-service.service";
import {
  map,
  tap,
  debounceTime,
  switchMap,
  distinctUntilChanged
} from "rxjs/operators";
import { of, Observable } from "rxjs";
import { JobDataService } from "../../job-data.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  searchForm = this.fb.group({
    category: [""],
    location: [""]
  });
  constructor(
    private fb: FormBuilder,
    private sts: StyleServiceService,
    private jb: JobDataService
  ) {}
  MOCK_LIST: Array<any> = [
    {
      category: "software"
    },
    {
      category: "business"
    },
    {
      category: "education"
    }
  ];

  CATEGORIES: CATEGORY[] = [];
  clicked: boolean = false;
  ngOnInit() {
    console.log("ng init");
    this.getList();
  }

  getList() {
    this.searchForm.valueChanges
      .pipe(
        map(data => {
          data.category = data.category.toLowerCase();
          return data.category;
        }),
        debounceTime(500),
        distinctUntilChanged(),
        // tap(data => console.log(data)),
        switchMap((category: string) => {
          if (!this.clicked) {
            return this.jb.searchCategories(category);
          }
          this.clicked = false;
          return of([]);
          // return of(category);
        })
      )
      .subscribe((categories: CATEGORY[]) => {
        return (this.CATEGORIES = categories);
      });
  }

  getClickCategory(value: string) {
    if (!value.trim()) {
      return;
    }
    this.Category.setValue(value);
    this.clicked = true;
    this.CATEGORIES = [];
    console.log("clicked in get click category: ", this.Category.value);
  }

  clickSearch() {
     console.log("clicked input");


    // this.showSearchInput = this.sts.searchForm;
  }

  get Category() {
    return this.searchForm.get("category") as FormControl;
  }
}
