import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CandidateResumeComponent} from '../candidate-files/candidate-resume/candidate-resume.component';
import { CandidateProfileComponent } from '../candidate-profile/candidate-profile.component';
import { NewExperienceComponent } from '../experience/new-experience/new-experience.component';
import { NewEducationComponent } from '../education/new-education/new-education.component';
import { EditExperienceComponent } from '../experience/edit-experience/edit-experience.component';
import { EditEducationComponent } from '../education/edit-education/edit-education.component';
import { GetEducationFieldService } from '../get-education-field.service';
import { GetExperienceFieldService } from '../get-experience-field.service';

const candidateFieldsRoutes: Routes = [
  {
    path: '',
    component: CandidateProfileComponent,
    resolve: {
      CandidateFields: DataFieldsService
    },
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
      },
      {
        path: 'view/resume',
        component: CandidateResumeComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ExpEduResFieldsRoutingModule { }
