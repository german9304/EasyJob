import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { CandidateSuggestedJobsComponent } from "../candidate-suggested-jobs/candidate-suggested-jobs.component";
import { JobseekerNavbarComponent } from "../candidate-navbar/jobseeker-navbar.component";
import { DataResolverService } from "../../data-resolver.service";
import { CandidateProfileComponent } from "../candidate-experience-fields/candidate-profile/candidate-profile.component";

import { ExperienceComponent } from "../candidate-experience-fields/experience/experience.component";
import { SavedJobsComponent } from "../saved-jobs/saved-jobs.component";
import { NewComponent } from "../candidate-experience-fields/new/new.component";
import { TestComponent } from "../candidate-experience-fields/testing/test.component";
const appRoutes: Routes = [
  {
    path: "jobseeker",
    component: JobseekerNavbarComponent,
    children: [
      {
        path: "saved-jobs",
        component: SavedJobsComponent
      },
      {
        path: "suggested-jobs",
        component: CandidateSuggestedJobsComponent
      },
      {
        path: "profile",
        component: CandidateProfileComponent,
        children: [
          {
            path: "experience",
            component: ExperienceComponent
          },
          {
            path: "test",
            component: TestComponent
          }
        ]
      },
      {
        path: "",
        redirectTo: "saved-jobs",
        pathMatch: "full"
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class JobseekerRoutingModule {}
