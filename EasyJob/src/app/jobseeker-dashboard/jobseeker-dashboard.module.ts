import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { JobseekerRoutingModule } from "./jobseeker-routing/jobseeker-routing.module";
import { ReactiveFormsModule } from "@angular/forms";


import { DashboardViewComponent } from "./dashboard/dashboard-view/dashboard-view.component";
import { JobseekerNavbarComponent } from "./jobseeker-navbar/jobseeker-navbar.component";
import { JobseekerNavbarViewComponent } from "./jobseeker-navbar/jobseeker-navbar-view/jobseeker-navbar-view.component";
import { CandidateProfileComponent } from "./candidate-profile/candidate-profile.component";
import { CandidateProfileViewComponent } from "./candidate-profile/candidate-profile-view/candidate-profile-view.component";
import { ExperienceComponent } from './candidate-profile/experience/experience.component';
import { ExperienceViewComponent } from './candidate-profile/experience/experience-view/experience-view.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, JobseekerRoutingModule],
  declarations: [
    DashboardComponent,
    DashboardViewComponent,
    JobseekerNavbarComponent,
    JobseekerNavbarViewComponent,
    CandidateProfileComponent,
    CandidateProfileViewComponent,
    ExperienceComponent,
    ExperienceViewComponent
  ]
})
export class JobseekerDashboardModule {}
