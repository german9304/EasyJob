import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsSectionComponent } from '../jobs-section/jobs-section.component';

const routes: Routes = [
  {
    path: 'jobs-section',
    component: JobsSectionComponent
  }
];
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class EmployerJobsRoutingModule {}
