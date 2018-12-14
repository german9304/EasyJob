import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: [
    '../sharedstyle.component.scss',
    './create-account.component.scss'
  ]
})
export class CreateAccountComponent implements OnInit {
  type: number;
  selected = false;
  createAccountForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  handleSubmit(option: string) {
    // this.auth.authenticate()
    // const {value: email} = this.Email;
    // const {value: password} = this.Password;
    // console.log(email, password);
    // localStorage.setItem('option',option);
    //    if(option === "jobseeker"){
    //      return this.router.navigate(["/jobseeker"]);
    //   }else{
    //     return this.router.navigate(["/employer"]);
    //   }
    const { value } = this.createAccountForm;
    this.auth.authenticate(value).subscribe(res => {
      // console.log(res);
      localStorage.setItem('option', option);
      if (option === 'jobseeker') {
        return this.router.navigate(['/jobseeker']);
      } else {
        return this.router.navigate(['/employer']);
      }
    });
  }
  get Email() {
    return this.createAccountForm.get('email') as FormControl;
  }
  get Password() {
    return this.createAccountForm.get('password') as FormControl;
  }
}
