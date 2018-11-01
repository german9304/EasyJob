/*
  @Modules
*/
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CandidateSuggestedJobsComponent } from "./candidate-suggested-jobs/candidate-suggested-jobs.component";
import { JobseekerRoutingModule } from "./candidate-routing/jobseeker-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CandidateFieldsModule } from "./candidate-fields/candidate-fields.module";
/*
  @Components
*/
import { DashboardViewComponent } from "./candidate-suggested-jobs/candidate-suggested-jobs-view/candidate-suggested-jobs-view.component";
import { JobseekerNavbarComponent } from "./candidate-navbar/jobseeker-navbar.component";
import { JobseekerNavbarViewComponent } from "./candidate-navbar/jobseeker-navbar-view/jobseeker-navbar-view.component";
import { SavedJobsComponent } from "./saved-jobs/saved-jobs.component";
import { SavedJobsViewComponent } from "./saved-jobs/saved-jobs-view/saved-jobs-view.component";
/*
Serivice 
*/
import { GetEducationFieldService } from "./candidate-fields/get-education-field.service";
import { GetExperienceFieldService } from "./candidate-fields/get-experience-field.service";
import { CandidateFieldsService } from "./services/candidate-fields.service";
import { AppliedJobsComponent } from "./applied-jobs/applied-jobs.component";
import { AppliedJobsViewComponent } from "./applied-jobs/applied-jobs-view/applied-jobs-view.component";
import { DataFieldsService } from "./services/data-fields.resolver.service";
import { CandidateSearchJobsComponent } from "./candidate-search-jobs/candidate-search-jobs.component";
import { CandidateFilesService } from "./services/candidate-files.service";
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, JobseekerRoutingModule],
  declarations: [
    CandidateSuggestedJobsComponent,
    DashboardViewComponent,
    JobseekerNavbarComponent,
    JobseekerNavbarViewComponent,
    SavedJobsComponent,
    SavedJobsViewComponent,
    AppliedJobsComponent,
    AppliedJobsViewComponent,
    CandidateSearchJobsComponent
  ],
  providers: [
    CandidateFieldsService,
    GetExperienceFieldService,
    DataFieldsService,
    GetEducationFieldService,
    CandidateFilesService
  ]
})
export class JobseekerDashboardModule {}
