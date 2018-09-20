import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { JobseekerRoutingModule } from "./jobseeker-routing/jobseeker-routing.module";
import { DashboardViewComponent } from "./dashboard/dashboard-view/dashboard-view.component";
import { JobseekerNavbarComponent } from "./jobseeker-navbar/jobseeker-navbar.component";
import { JobseekerNavbarViewComponent } from "./jobseeker-navbar/jobseeker-navbar-view/jobseeker-navbar-view.component";
import { CandidateProfileComponent } from "./candidate-profile/candidate-profile.component";
import { CandidateProfileViewComponent } from "./candidate-profile/candidate-profile-view/candidate-profile-view.component";
@NgModule({
  imports: [CommonModule, JobseekerRoutingModule],
  declarations: [
    DashboardComponent,
    DashboardViewComponent,
    JobseekerNavbarComponent,
    JobseekerNavbarViewComponent,
    CandidateProfileComponent,
    CandidateProfileViewComponent
  ]
})
export class JobseekerDashboardModule {}
