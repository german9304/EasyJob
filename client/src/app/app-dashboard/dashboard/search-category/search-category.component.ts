import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['../search-inpt.css', './search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {
  @Input() searchFormParent: FormGroup;
  @Input() categories;
  @Output() category: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  handleClick(event: string) {
    // console.log(`event: ${event}`);
    this.category.emit(event);
  }
}
