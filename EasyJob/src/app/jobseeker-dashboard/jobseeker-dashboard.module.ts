import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CandidateSuggestedJobsComponent } from "./candidate-suggested-jobs/candidate-suggested-jobs.component";
import { JobseekerRoutingModule } from "./jobseeker-routing/jobseeker-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { DashboardViewComponent } from "./candidate-suggested-jobs/candidate-suggested-jobs-view/candidate-suggested-jobs-view.component";
import { JobseekerNavbarComponent } from "./jobseeker-navbar/jobseeker-navbar.component";
import { JobseekerNavbarViewComponent } from "./jobseeker-navbar/jobseeker-navbar-view/jobseeker-navbar-view.component";
import { CandidateProfileComponent } from "./candidate-profile/candidate-profile.component";
import { CandidateProfileViewComponent } from "./candidate-profile/candidate-profile-view/candidate-profile-view.component";
import { ExperienceComponent } from "./candidate-profile/experience/experience.component";
import { ExperienceViewComponent } from "./candidate-profile/experience/experience-view/experience-view.component";
import { SavedJobsComponent } from "./saved-jobs/saved-jobs.component";
import { SavedJobsViewComponent } from "./saved-jobs/saved-jobs-view/saved-jobs-view.component";
import { NewComponent } from './candidate-profile/new/new.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, JobseekerRoutingModule],
  declarations: [
    CandidateSuggestedJobsComponent,
    DashboardViewComponent,
    JobseekerNavbarComponent,
    JobseekerNavbarViewComponent,
    CandidateProfileComponent,
    CandidateProfileViewComponent,
    ExperienceComponent,
    ExperienceViewComponent,
    SavedJobsComponent,
    SavedJobsViewComponent,
    NewComponent
  ]
})
export class JobseekerDashboardModule {}
