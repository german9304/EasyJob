import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { CandidateProfileViewComponent } from './candidate-profile/candidate-profile-view/candidate-profile-view.component';
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
    CommonModule
  ],
  declarations: [
    EducationViewComponent,
    EducationListComponent,
    ExperienceListComponent,
    EditExperienceComponent,
    EditEducationComponent,
    NewEducationComponent,
    CandidateFilesComponent,
    CandidateResumeComponent

  ]
})
export class CandidateExpEduResFieldsModule { }
