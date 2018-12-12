import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CATEGORY } from '../job';
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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
