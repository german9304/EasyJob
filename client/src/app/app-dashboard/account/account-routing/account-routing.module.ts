import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from '../log-in/log-in.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { RouterModule, Routes } from '@angular/router';

const accountRoutes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'create',
    component: CreateAccountComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(accountRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AccountRoutingModule {}
