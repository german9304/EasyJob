/*
Modules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppDashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { AccountModule } from './account/account.module';
import { JobListDataService } from './job-list-data.service';

/*
Components
*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarViewComponent } from './nav-bar/nav-bar-view/nav-bar-view.component';
import { PostjobComponent } from './postjob/postjob.component';
import { PostjobViewComponent } from './postjob/postjob-view/postjob-view.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobSerchListComponent } from './job-search/job-serch-list/job-serch-list.component';
import { SearchCategoryComponent } from './dashboard/search-category/search-category.component';
import { SearchLocationComponent } from './dashboard/search-location/search-location.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { SearchFormComponent } from './dashboard/search-form/search-form.component';

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
    PostjobComponent,
    PostjobViewComponent,
    JobSearchComponent,
    JobSerchListComponent,
    SearchCategoryComponent,
    SearchLocationComponent,
    CategoriesComponent,
    SearchFormComponent
  ],
  providers: [JobListDataService]
})
export class AppDashboardModule {}
