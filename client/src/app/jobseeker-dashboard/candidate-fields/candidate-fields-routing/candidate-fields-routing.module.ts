import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../testing/test.component';
import {CandExpEduResComponent} from '../cand-fields-exp/cand-fields-jobs/cand-fields-jobs.component';
import { DataFieldsService } from '../../services/data-fields.resolver.service';
import {CandidateFieldsComponent} from '../candidate-fields/candidate-fields.component';

const candidateFieldsRoutes: Routes = [
  {
    path: '',
    component: CandidateFieldsComponent,
  //   resolve: {
  //     CandidateFields: DataFieldsService
  //   },
   },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(candidateFieldsRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class CandidateFieldsRoutingModule {}
