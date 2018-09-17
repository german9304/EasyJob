import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { JobseekerRoutingModule } from "./jobseeker-routing/jobseeker-routing.module";
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
@NgModule({
  imports: [CommonModule, JobseekerRoutingModule],
  declarations: [DashboardComponent, DashboardViewComponent]
})
export class JobseekerDashboardModule {}
