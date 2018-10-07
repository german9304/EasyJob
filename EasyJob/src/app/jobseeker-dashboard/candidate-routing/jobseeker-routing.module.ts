import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";

import { DataResolverService } from "../../auth-data-resolver.service";
import { DataFieldsService } from "../data-fields.resolver.service";
/*
@Components 
*/
import { CandidateSuggestedJobsComponent } from "../candidate-suggested-jobs/candidate-suggested-jobs.component";
import { JobseekerNavbarComponent } from "../candidate-navbar/jobseeker-navbar.component";
import { CandidateProfileComponent } from "../candidate-experience-fields/candidate-profile/candidate-profile.component";
import { AppliedJobsComponent } from "../applied-jobs/applied-jobs.component";
import { EducationComponent } from "../candidate-experience-fields/education/education.component";
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
        path: "applied-jobs",
        component: AppliedJobsComponent
      },
      {
        path: "profile",
        component: CandidateProfileComponent,
        resolve: {
          CandidateFields: DataFieldsService
        },
        children: [
          {
            path: "experience",
            component: ExperienceComponent
          },
          {
            path: "education",
            component: EducationComponent
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
