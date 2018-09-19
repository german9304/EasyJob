import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { JobseekerRoutingModule } from "./jobseeker-routing/jobseeker-routing.module";
import { DashboardViewComponent } from "./dashboard/dashboard-view/dashboard-view.component";
import { JobseekerNavbarComponent } from "./jobseeker-navbar/jobseeker-navbar.component";
import { JobseekerNavbarViewComponent } from "./jobseeker-navbar/jobseeker-navbar-view/jobseeker-navbar-view.component";
@NgModule({
  imports: [CommonModule, JobseekerRoutingModule],
  declarations: [
    DashboardComponent,
    DashboardViewComponent,
    JobseekerNavbarComponent,
    JobseekerNavbarViewComponent
  ]
})
export class JobseekerDashboardModule {}
