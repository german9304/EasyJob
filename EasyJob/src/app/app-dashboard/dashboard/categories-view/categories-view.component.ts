import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CATEGORY } from '../../../job';

@Component({
  selector: 'app-categories-view',
  template: `
    <ul id="categories" [class.active]="categories.length > 0" >
      <li class="item category{{i}}" *ngFor="let category of categories ;  let i= index">
        <span class="link-category" (click)="onCategoryClick(category.category)"> {{category.category}}</span>
      </li>
    </ul>
  `,
  styleUrls: [
    '../dashboard-view/dashboard-view.component.scss',
    './categories-view.component.scss'
  ]
})
export class CategoriesViewComponent implements OnInit {
  @Input()
  categories: CATEGORY[];
  @Output()
  clickCategories = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  onCategoryClick(category: string) {
    this.clickCategories.emit(category);
  }
}
