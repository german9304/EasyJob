import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateFieldsRoutingModule } from './candidate-fields-routing/candidate-fields-routing.module';

import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { CandidateProfileViewComponent } from './candidate-profile/candidate-profile-view/candidate-profile-view.component';
import { NewExperienceComponent } from './experience/new-experience/new-experience.component';
import { TestComponent } from './testing/test.component';
import { TestViewComponent } from './testing/test-view/test-view.component';
import { EducationComponent } from './education/education.component';
import { EducationViewComponent } from './education/education-view/education-view.component';
import { EducationListComponent } from './education-list/education-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { NewEducationComponent } from './education/new-education/new-education.component';
import { CandidateFilesComponent } from './candidate-files/candidate-files.component';
import { CandidateResumeComponent } from './candidate-files/candidate-resume/candidate-resume.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CandidateFieldsRoutingModule
  ],
  declarations: [
    CandidateProfileComponent,
    CandidateProfileViewComponent,
    NewExperienceComponent,
    EducationViewComponent,
    EducationListComponent,
    ExperienceListComponent,
    EditExperienceComponent,
    EditEducationComponent,
    NewEducationComponent,
    CandidateFilesComponent,
    CandidateResumeComponent
  ],
  exports: []
})
export class CandidateFieldsModule {}
