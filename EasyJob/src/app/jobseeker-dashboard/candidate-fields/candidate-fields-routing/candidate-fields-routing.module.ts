import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../testing/test.component';

import { DataFieldsService } from '../../services/data-fields.resolver.service';

const candidateFieldsRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(candidateFieldsRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class CandidateFieldsRoutingModule {}
