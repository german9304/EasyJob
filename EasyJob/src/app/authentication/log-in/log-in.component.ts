import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  loginForm = this.fb.group({
    username: [""],
    password: [""]
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit() {}
  onSubmit(isSubmited: boolean) {
    console.log(this.loginForm);
  }

  get userName() {
    return this.loginForm.get("username") as FormControl;
  }
}
