import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { USER } from "../../user";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["../sharedstyle.component.scss", "./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  option: boolean;
  loginForm = this.fb.group({
    email: [""],
    password: [""]
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    console.log("is logged in: ", this.auth.isLoggedin);
  }
  onSubmit() {
    // console.log(this.loginForm.value);
    const {value} = this.loginForm.value;
    this.auth.login(value).subscribe( res => console.log(res));

    
    this.loginForm.setValue({
      email: '',
      password: ''
    });

    console.log("submited");
  }
  storeField(option: string) {
    this.option = true;
    localStorage.setItem("option", option);
  }
  get userName(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }

  get PassWord(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }
}
