import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CATEGORY } from '../../../job';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['../search-inpt.css', './search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() formParent: FormGroup;
  @Input() categories: CATEGORY[];
  @Output() clickSearch: EventEmitter<null> = new EventEmitter<null>();
  @Output() clickCategory: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    console.log(this.formParent);
  }
  handleSearch() {
    this.clickSearch.emit(null);
  }
  handleCategory(category: string) {
    this.clickCategory.emit(category);
  }
}
