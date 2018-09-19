import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
 createAccountForm = this.fb.group({
    username: [''],
    email: [''],
    password:['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
