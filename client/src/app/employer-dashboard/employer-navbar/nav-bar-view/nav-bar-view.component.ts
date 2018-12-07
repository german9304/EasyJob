import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-nav-bar-view',
  templateUrl: './nav-bar-view.component.html',
  styleUrls: [
    '../../../jobseeker-employersharedstyle.scss',
    './nav-bar-view.component.scss'
  ]
})
export class NavBarViewComponent implements OnInit {
  @Output() clickEmployer: EventEmitter<null> = new EventEmitter();
  @Input() isClicked: boolean;
  @Input() userEmail: string;
  @Input() searchForm: FormGroup;
  constructor() {}

  ngOnInit() {}

  handleEmployer() {
    this.clickEmployer.emit(null);
  }
}
