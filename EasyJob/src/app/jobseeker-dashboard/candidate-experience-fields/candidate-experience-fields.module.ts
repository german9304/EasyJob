import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { CandidateProfileComponent } from "./candidate-profile/candidate-profile.component";
import { CandidateProfileViewComponent } from "./candidate-profile/candidate-profile-view/candidate-profile-view.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ExperienceViewComponent } from "./experience/experience-view/experience-view.component";
import { TestComponent } from "./testing/test.component";
import { TestViewComponent } from "./testing/test-view/test-view.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [
    CandidateProfileComponent,
    CandidateProfileViewComponent,
    ExperienceComponent,
    ExperienceViewComponent,
    TestComponent,
    TestViewComponent
  ],
  exports: [CandidateProfileComponent, ExperienceComponent, TestComponent]
})
export class CandidateExperienceFieldsModule {}
