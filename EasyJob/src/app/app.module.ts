import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AuthenticationModule } from "../app/authentication/authentication.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Router } from "@angular/router";
import {AuthService} from "./authentication/auth.service"

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule , AuthenticationModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    //console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
