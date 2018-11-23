import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EXPERIENCE, EDUCATION, FILE } from '../../../../../job';
import { List, Map } from 'immutable';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-cand-fields-jobs-view',
  templateUrl: './cand-fields-jobs-view..component.html',
  styleUrls: ['./cand-fields-jobs-view..component.scss']
})
export class CandExpEduResViewComponent implements OnInit {
  @Input()
  experience: List<EXPERIENCE>;
  @Input()
  education: List<EDUCATION>;
  @Input()
  trackByExp;
  @Input()
  fileInfo: Map<string, string>;
  @Input()
  file;
  @Output()
  fileChosen: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {}
  fileSubmit(event) {
    this.fileChosen.emit(event);
  }
}
