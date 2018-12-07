import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployerDashboardComponent } from './dashboard/dashboard.component';
import { EmployerRoutingModule } from './employer-routing/employer-routing.module';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { EmployerNavbarComponent } from './employer-navbar/employer-navbar.component';
import { NavBarViewComponent } from './employer-navbar/nav-bar-view/nav-bar-view.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PostJobComponent } from './post-job/post-job.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { FormRow1Component } from './post-job/form-row1/form-row1.component';
import { FormRow2Component } from './post-job/form-row2/form-row2.component';
import { JobListComponent } from './job-list/job-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { JobsSectionComponent } from './jobs-section/jobs-section.component';
import { SkillsFormComponent } from './post-job/skills-form/skills-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, EmployerRoutingModule],
  declarations: [
    EmployerDashboardComponent,
    DashboardViewComponent,
    EmployerNavbarComponent,
    NavBarViewComponent,
    ProfileDashboardComponent,
    SearchFormComponent,
    PostJobComponent,
    CandidatesComponent,
    FormRow1Component,
    FormRow2Component,
    JobListComponent,
    CandidateListComponent,
    JobsSectionComponent,
    SkillsFormComponent
  ],
  exports: [EmployerDashboardComponent]
})
export class EmployerDashboardModule {}
