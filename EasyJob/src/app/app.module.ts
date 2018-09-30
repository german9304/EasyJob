import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing/app-routing.module";
//import { AuthenticationModule } from "../app/authentication/authentication.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { JobseekerDashboardModule } from "./jobseeker-dashboard/jobseeker-dashboard.module";
import { EmployerDashboardModule } from "./employer-dashboard/employer-dashboard.module";
import { AppDashboardModule } from "./app-dashboard/app-dashboard.module";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { DataResolverService } from "./auth-data-resolver.service";
import { StyleServiceService } from "./style-service.service";
import { JobDataService } from "./job-data.service";
import { TestDirective } from "./test.directive";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, TestDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppDashboardModule,
    JobseekerDashboardModule,
    EmployerDashboardModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    DataResolverService,
    JobDataService,
    StyleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    //console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
