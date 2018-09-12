import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../auth.service";
import {USER} from "../user"

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

  constructor(private fb: FormBuilder,private auth: AuthService) {}
  ngOnInit() {}
  onSubmit(isSubmited: boolean) {
    const username = this.userName.value;
    const password = this.PassWord.value;

    const contact: USER = new USER(username,password);
    this.auth.authenticate(contact).subscribe(
       (user: USER) => console.log(user),
       (error) => console.log(error)
      )
  }

  get userName(): FormControl  {
    return this.loginForm.get("username") as FormControl;
  }

  get PassWord(): FormControl {
      return this.loginForm.get("password") as FormControl;
  }
}
