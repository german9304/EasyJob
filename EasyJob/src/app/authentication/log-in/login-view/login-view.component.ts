import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"]
})
export class LoginViewComponent implements OnInit {
  @Input()
  groupForm: FormGroup;
  @Output()
  isSubmited = new EventEmitter<boolean>();

  constructor() {}
  ngOnInit() {}
  onSubmit() {
    this.isSubmited.emit(true);
  }
}
