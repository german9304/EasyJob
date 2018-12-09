import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CATEGORY } from '../../job';
import { StyleServiceService } from '../../services/style-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  map,
  tap,
  debounceTime,
  switchMap,
  distinctUntilChanged
} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { JobDataService } from '../../services/job-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchForm = this.fb.group({
    category: [''],
    location: ['']
  });
  constructor(
    private fb: FormBuilder,
    private sts: StyleServiceService,
    private jb: JobDataService,
    private router: Router
  ) {}
  MOCK_LIST: Array<any> = [
    {
      category: 'software'
    },
    {
      category: 'business'
    },
    {
      category: 'education'
    }
  ];

  CATEGORIES: CATEGORY[] = [];
  clicked = false;
  ngOnInit() {
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

  handleCategory(value: string) {
    if (!value.trim()) {
      return;
    }
    this.Category.setValue(value);
    this.clicked = true;
    this.CATEGORIES = [];
    // console.log("clicked in get click category: ", this.Category.value);
  }

  searchJobs() {
    const { category, location } = this.searchForm.value;
    // console.log(value);
    this.router.navigate(['/jobs', { search: category, location }]);
  }

  get Category() {
    return this.searchForm.get('category') as FormControl;
  }
}
