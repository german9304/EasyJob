import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GetExperienceFieldService } from '../cand-fields-exp/get-experience-field.service';
import { GetEducationFieldService } from '../cand-fields-exp/get-education-field.service';

import { CandExpEduResComponent } from '../cand-fields-exp/cand-fields-jobs/cand-fields-jobs.component';
import { CandidateFieldsComponent } from '../candidate-fields/candidate-fields.component';
import { NewExperienceComponent } from '../cand-fields-exp/experience/new-experience/new-experience.component';
import { NewEducationComponent } from '../cand-fields-exp/education/new-education/new-education.component';
import { EditExperienceComponent } from '../cand-fields-exp/experience/edit-experience/edit-experience.component';
import { EditEducationComponent } from '../cand-fields-exp/education/edit-education/edit-education.component';

const candidateFieldsRoutes: Routes = [
  {
    path: '',
    component: CandidateFieldsComponent,
    //   resolve: {
    //     CandidateFields: DataFieldsService
    //   },
    children: [
      {
        path: 'create',
        children: [
          {
            path: 'experience',
            component: NewExperienceComponent
          },
          {
            path: 'education',
            component: NewEducationComponent
          }
        ]
      },
      {
        path: 'update',
        children: [
          {
            path: 'experience/:id',
            component: EditExperienceComponent,
            resolve: { field: GetExperienceFieldService }
          },
          {
            path: 'education/:id',
            component: EditEducationComponent,
            resolve: { field: GetEducationFieldService }
          }
        ]
      }
    ]
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
