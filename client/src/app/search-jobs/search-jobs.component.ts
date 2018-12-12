import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CATEGORY } from '../job';
import { Router, ActivatedRoute } from '@angular/router';
import { JobDataService } from '../services/job-data.service';
import {
  map,
  tap,
  debounceTime,
  switchMap,
  distinctUntilChanged
} from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.scss']
})
export class SearchJobsComponent implements OnInit {
  searchForm = this.fb.group({
    category: [''],
    location: ['']
  });
  CATEGORIES: CATEGORY[] = [];
  clicked = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private jb: JobDataService
  ) {}

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

  handleSearch() {
    const { category, location } = this.searchForm.value;
    // console.log(value);
    this.router.navigate(['/jobs', { search: category, location }]);
  }

  get Category() {
    return this.searchForm.get('category') as FormControl;
  }
}
