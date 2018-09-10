import { Component, OnInit, Input, EventEmitter,Output} from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "app-login-view",
  template: `
     <!---
       <div> 
        <p> {{groupForm.value | json}} </p>
        <p>  {{groupForm.status | json}} </p>
      </div>
      --->
        <form [formGroup]="groupForm" (ngSubmit)="onSubmit()" id="login-form" class="login">
            <div class="form form-group">
              <label for="name">username:</label>
              <input type="text" id="name" formControlName="username" placeholder="Name" required>
            </div>
            <div class="form form-group">
              <label for="password" id="password">Password:</label>
              <input type="password" placeholder="Password" formControlName="password" id="password" required>
            </div>
          <div class="form form-btn">
            <button id="btn-submit" type="submit" [disabled]="!groupForm.valid"> sign in </button>
          </div>
        </form>
  `,
  styleUrls: ["./login-view.component.css"]
})
export class LoginViewComponent implements OnInit {
  @Input() groupForm: FormGroup;
  @Output() isSubmited = new EventEmitter<boolean>();

  constructor() {}
  ngOnInit() {}
  onSubmit(){
    this.isSubmited.emit(true);
  }
}
