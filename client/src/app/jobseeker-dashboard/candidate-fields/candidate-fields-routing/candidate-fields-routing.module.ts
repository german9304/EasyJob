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

import { CandidateResumeComponent } from '../cand-fields-exp/candidate-files/candidate-resume/candidate-resume.component';
import { FormRow1Component } from '../candidate-info/form-row1/form-row1.component';
import { FormRow2Component } from '../candidate-info/form-row2/form-row2.component';
import { FormRow3Component } from '../candidate-info/form-row3/form-row3.component';

const candidateFieldsRoutes: Routes = [
  {
    path: '',
    component: CandidateFieldsComponent,
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
          },
          {
            path: 'profile-info-1',
            component: FormRow1Component
          },
          {
            path: 'profile-info-2',
            component: FormRow2Component
          },
          {
            path: 'profile-info-3',
            component: FormRow3Component
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
      },
      {
        path: 'view/resume',
        component: CandidateResumeComponent
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
