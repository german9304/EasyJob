import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { LoginViewComponent } from './log-in/login-view/login-view.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAccountViewComponent } from './create-account/create-account-view/create-account-view.component';
import { AccountRoutingModule } from './account-routing/account-routing.module';
import { TypeOptionComponent } from './create-account/type-option/type-option.component';
import { InptRow1Component } from './create-account/inpt-row1/inpt-row1.component';
import { InptRow2Component } from './create-account/inpt-row2/inpt-row2.component';
import { InvalidFormComponent } from './create-account/invalid-form/invalid-form.component';
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
    CreateAccountViewComponent,
    TypeOptionComponent,
    InptRow1Component,
    InptRow2Component,
    InvalidFormComponent
  ],
  exports: []
})
export class AccountModule {}
