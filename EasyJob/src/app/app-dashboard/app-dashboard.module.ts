/*
Modules 
*/
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppDashboardRoutingModule } from "./app-dashboard-routing/app-dashboard-routing.module";

/*
Components 
*/
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NavBarViewComponent } from "./nav-bar/nav-bar-view/nav-bar-view.component";
import { LogInComponent } from "./log-in/log-in.component";
import { LoginViewComponent } from "./log-in/login-view/login-view.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { CreateAccountViewComponent } from "./create-account/create-account-view/create-account-view.component";

@NgModule({
  imports: [
    CommonModule,
    AppDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    NavBarComponent,
    NavBarViewComponent,
    LogInComponent,
    LoginViewComponent,
    CreateAccountComponent,
    CreateAccountViewComponent
  ]
})
export class AppDashboardModule {}
