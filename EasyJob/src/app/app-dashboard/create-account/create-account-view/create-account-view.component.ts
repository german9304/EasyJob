import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "create-account-view",
  templateUrl: "./create-account-view.component.html",
  styleUrls: [
    "../../login-create-account-shared.component.scss",
    "./create-account-view.component.scss"
  ]
})
export class CreateAccountViewComponent implements OnInit {
  @Input()
  createaccount: FormGroup;
  @Output()
  submitted = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted.emit(null);
  }
}
