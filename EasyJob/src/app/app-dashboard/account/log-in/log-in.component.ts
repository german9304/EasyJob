import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { USER } from "../../../user";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["../../sharedstyle.component.scss", "./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  option: boolean;
  loginForm = this.fb.group({
    email: [""],
    password: [""]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {
    // console.log("is logged in: ", this.auth.isLoggedin);
  }
  onSubmit() {
    // console.log(this.loginForm.value);
    const { value } = this.loginForm;
    this.auth.login(value).subscribe(res => {
      return this.router.navigate(["/jobseeker"]);
    });

    this.loginForm.setValue({
      email: "",
      password: ""
    });

    // console.log("submited");
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
