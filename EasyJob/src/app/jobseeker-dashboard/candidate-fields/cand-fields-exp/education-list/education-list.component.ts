import { Component, OnInit, Input } from '@angular/core';
import { EDUCATION } from '../../../../job';
import { Map, List } from 'immutable';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['../../shared-fields-style.scss', './education-list.component.scss']
})
export class EducationListComponent implements OnInit {
  @Input()
  EDUCATION: List<EDUCATION>;
  constructor() {}

  ngOnInit() {}
}
