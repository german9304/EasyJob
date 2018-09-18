import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  Optional
} from "@angular/core";
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
  @Output()
  fieldSelected = new EventEmitter<string>();
  i: number;

  constructor() {}
  ngOnInit() {}
  onSubmit() {
    this.isSubmited.emit(true);
  }

  clicked(number: number, option: string) {
    this.i = number;
    this.fieldSelected.emit(option);
  }
}
