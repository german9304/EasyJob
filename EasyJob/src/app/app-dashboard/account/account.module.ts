import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { LogInComponent } from "./log-in/log-in.component";
import { LoginViewComponent } from "./log-in/login-view/login-view.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { CreateAccountViewComponent } from "./create-account/create-account-view/create-account-view.component";
import { AccountRoutingModule } from "./account-routing/account-routing.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  declarations: [
    LogInComponent,
    LoginViewComponent,
    CreateAccountComponent,
    CreateAccountViewComponent
  ],
  exports: []
})
export class AccountModule {}
