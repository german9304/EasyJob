import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpEduResFieldsRoutingModule } from './cand-fields-routing/cand-fields-routing.module';


import { CandExpEduResComponent } from './cand-fields-jobs/cand-fields-jobs.component';
import { CandExpEduResViewComponent } from './cand-fields-jobs/cand-fields-jobs-view/cand-fields-jobs-view.component';

import { EducationListComponent } from './education-list/education-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import {NewExperienceComponent} from './experience/new-experience/new-experience.component';
import {NewEducationComponent} from './education/new-education/new-education.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { CandidateFilesComponent } from './candidate-files/candidate-files.component';
import { CandidateResumeComponent } from './candidate-files/candidate-resume/candidate-resume.component';
@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, /*ExpEduResFieldsRoutingModule*/
  ],
  declarations: [
    CandExpEduResComponent ,
    CandExpEduResViewComponent,
    EducationListComponent,
    ExperienceListComponent,
    NewExperienceComponent,
    NewEducationComponent,
    EditExperienceComponent,
    EditEducationComponent,
    CandidateFilesComponent,
    CandidateResumeComponent
  ],
  exports: [ CandExpEduResComponent, /*NewExperienceComponent, NewEducationComponent*/ ]
})
export class CandFieldsExpModule { }
