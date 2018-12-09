import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CATEGORY } from '../../../job';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() formParent: FormGroup;
  @Input() categories: CATEGORY[];
  constructor() {}

  ngOnInit() {
    console.log(this.formParent);
  }
  handleSearch() {

  }
}
