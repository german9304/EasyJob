import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CandidateFieldsRoutingModule } from "./candidate-fields-routing/candidate-fields-routing.module";

import { CandidateProfileComponent } from "./candidate-profile/candidate-profile.component";
import { CandidateProfileViewComponent } from "./candidate-profile/candidate-profile-view/candidate-profile-view.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ExperienceViewComponent } from "./experience/experience-view/experience-view.component";
import { TestComponent } from "./testing/test.component";
import { TestViewComponent } from "./testing/test-view/test-view.component";
import { EducationComponent } from "./education/education.component";
import { EducationViewComponent } from "./education/education-view/education-view.component";
import { EducationListComponent } from "./education-list/education-list.component";
import { ExperienceListComponent } from "./experience-list/experience-list.component";

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
    ExperienceComponent,
    ExperienceViewComponent,
    TestComponent,
    TestViewComponent,
    EducationComponent,
    EducationViewComponent,
    EducationListComponent,
    ExperienceListComponent
  ],
  exports: []
})
export class CandidateFieldsModule {}
