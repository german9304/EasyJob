import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { ExperienceComponent } from "../experience/experience.component";
// import { NewComponent } from "../new/new.component";
import { TestComponent } from '../testing/test.component';

import { DataFieldsService } from '../../services/data-fields.resolver.service';
// import { GetExperienceFieldService } from '../get-experience-field.service';
// import { CandidateResumeComponent} from '../candidate-files/candidate-resume/candidate-resume.component';
// import { CandidateProfileComponent } from '../candidate-profile/candidate-profile.component';
// import { NewExperienceComponent } from '../experience/new-experience/new-experience.component';
// import { NewEducationComponent } from '../education/new-education/new-education.component';
// import { EditExperienceComponent } from '../experience/edit-experience/edit-experience.component';
// import { EditEducationComponent } from '../education/edit-education/edit-education.component';
// import { GetEducationFieldService } from '../get-education-field.service';

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
