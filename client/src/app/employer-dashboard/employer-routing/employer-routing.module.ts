import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployerDashboardComponent } from '../dashboard/dashboard.component';
import { EmployerNavbarComponent } from '../employer-navbar/employer-navbar.component';
import { PostJobComponent } from '../post-job/post-job.component';
import { CandidatesComponent } from '../candidates/candidates.component';
// import { JobsSectionComponent } from '../jobs-section/jobs-section.component';

const appRoutes: Routes = [
  {
    path: 'employer',
    component: EmployerNavbarComponent,
    children: [
      {
        path: 'jobs-section',
        loadChildren: '../employer-jobs/employer-jobs.module#EmployerJobsModule'
      },
      {
        path: 'post-job',
        component: PostJobComponent
      },
      {
        path: 'candidates',
        component: CandidatesComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerRoutingModule {}
