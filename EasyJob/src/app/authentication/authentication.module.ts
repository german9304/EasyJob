import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";

import { LogInComponent } from "./log-in/log-in.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { LoginViewComponent } from "./log-in/login-view/login-view.component";
import { AuthRoutingModule } from "./auth-routing/auth-routing.module";
import { CreateAccountViewComponent } from './create-account/create-account-view/create-account-view.component';
import { AccountComponent } from './account/account.component';




@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  declarations: [LogInComponent, LoginViewComponent, CreateAccountComponent, CreateAccountViewComponent, AccountComponent]
})
export class AuthenticationModule {}
