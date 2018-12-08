import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { JobsSectionComponent } from '../jobs-section/jobs-section.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { JobComponent } from '../job/job.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: JobsSectionComponent
      },
      {
        path: 'job/:id',
        component: JobComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerJobsRoutingModule {}
