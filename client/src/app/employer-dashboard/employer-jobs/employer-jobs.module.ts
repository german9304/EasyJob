import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerJobsRoutingModule } from './employer-jobs-routing/employer-jobs-routing.module';

import { JobsSectionComponent } from './jobs-section/jobs-section.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobComponent } from './job/job.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, EmployerJobsRoutingModule],
  declarations: [JobsSectionComponent, JobListComponent, JobComponent, DashboardComponent],
  exports: []
})
export class EmployerJobsModule {}
