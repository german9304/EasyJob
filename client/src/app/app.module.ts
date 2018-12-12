import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
// import { AuthenticationModule } from "../app/authentication/authentication.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobseekerDashboardModule } from './jobseeker-dashboard/jobseeker-dashboard.module';
import { EmployerDashboardModule } from './employer-dashboard/employer-dashboard.module';
import { AppDashboardModule } from './app-dashboard/app-dashboard.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DataResolverService } from './services/auth-data-resolver.service';
import { StyleService } from './services/style-service.service';
import { JobDataService } from './services/job-data.service';
import { TestDirective } from './test.directive';
import { AuthGuardService } from './services/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarContentComponent } from './navbar/navbar-content/navbar-content.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { SearchFormComponent } from './search-jobs/search-form/search-form.component';
import { SearchCategoryComponent } from './search-jobs/search-category/search-category.component';
import { SearchLocationComponent } from './search-jobs/search-location/search-location.component';
import { CategoriesComponent } from './search-jobs/categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SearchResultJobsComponent } from './search-result-jobs/search-result-jobs.component';
import { JobListComponent } from './search-result-jobs/job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TestDirective,
    NavbarComponent,
    NavbarContentComponent,
    SearchJobsComponent,
    SearchFormComponent,
    SearchCategoryComponent,
    SearchLocationComponent,
    CategoriesComponent,
    DashboardComponent,
    PostJobComponent,
    SearchResultJobsComponent,
    JobListComponent
  ],
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
    StyleService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
