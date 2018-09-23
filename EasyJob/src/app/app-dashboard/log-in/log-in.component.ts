import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { USER } from "../../user";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  loginForm = this.fb.group({
    email: [""],
    password: [""]
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    console.log("is logged in: ", this.auth.isLoggedin);
  }
  onSubmit(isSubmited: boolean) {
    console.log("submited");
    /*
    const {value: username} = this.userName;
    const {value: password} = this.PassWord;
    const contact: USER = new USER(username,password);
    this.auth.authenticate(contact).subscribe(
       (user: USER) => console.log(user),
       (error) => console.log(error)
      )
      */
  }
  storeField(option: string) {
    localStorage.setItem("option", option);
  }
  get userName(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }

  get PassWord(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }
}
