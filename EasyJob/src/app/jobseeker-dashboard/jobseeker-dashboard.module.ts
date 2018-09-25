import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CandidateSuggestedJobsComponent } from "./candidate-suggested-jobs/candidate-suggested-jobs.component";
import { JobseekerRoutingModule } from "./candidate-routing/jobseeker-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CandidateExperienceFieldsModule } from "./candidate-experience-fields/candidate-experience-fields.module";
import { DashboardViewComponent } from "./candidate-suggested-jobs/candidate-suggested-jobs-view/candidate-suggested-jobs-view.component";
import { JobseekerNavbarComponent } from "./candidate-navbar/jobseeker-navbar.component";
import { JobseekerNavbarViewComponent } from "./candidate-navbar/jobseeker-navbar-view/jobseeker-navbar-view.component";
import { SavedJobsComponent } from "./saved-jobs/saved-jobs.component";
import { SavedJobsViewComponent } from "./saved-jobs/saved-jobs-view/saved-jobs-view.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CandidateExperienceFieldsModule,
    JobseekerRoutingModule
  ],
  declarations: [
    CandidateSuggestedJobsComponent,
    DashboardViewComponent,
    JobseekerNavbarComponent,
    JobseekerNavbarViewComponent,
    SavedJobsComponent,
    SavedJobsViewComponent
  ]
})
export class JobseekerDashboardModule {}
