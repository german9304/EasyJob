import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account-view',
  templateUrl: './create-account-view.component.html',
  styleUrls: [
    '../../../sharedstyle.component.scss',
    './create-account-view.component.scss'
  ]
})
export class CreateAccountViewComponent implements OnInit {
  @Input()
  createaccount: FormGroup;
  @Output()
  submitted = new EventEmitter<string>();
  fieldSelected: string;
  selected = false;
  i: number;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.selected) {
      this.submitted.emit(this.fieldSelected);
    }
  }
  clicked(number: number, option: string) {
    this.selected = true;
    this.i = number;
    this.fieldSelected = option;
  }
}
