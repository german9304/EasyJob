import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsSectionComponent } from './jobs-section/jobs-section.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobComponent } from './job/job.component';

@NgModule({
  imports: [CommonModule],
  declarations: [JobsSectionComponent, JobListComponent, JobComponent],
  exports: [JobsSectionComponent]
})
export class EmployerJobsModule {}
