import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"]
})
export class CreateAccountComponent implements OnInit {
  createAccountForm = this.fb.group({
    email: [""],
    password: [""]
  });

  constructor(private router: Router,private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    // this.auth.authenticate()
    // const {value: email} = this.Email;
    // const {value: password} = this.Password;
    // console.log(email, password);
    const { value } = this.createAccountForm;
    this.auth.authenticate(value).subscribe(res => {
      console.log(res);
      return this.router.navigate(['/'])
    });

  }
  get Email() {
    return this.createAccountForm.get("email") as FormControl;
  }
  get Password() {
    return this.createAccountForm.get("password") as FormControl;
  }
}
