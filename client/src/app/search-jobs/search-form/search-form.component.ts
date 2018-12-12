import { Component, OnInit, Input } from '@angular/core';
import { CATEGORY } from '../../job';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() formParent: FormGroup;
  @Input() categories: CATEGORY[];
  constructor() {}

  ngOnInit() {}
}
