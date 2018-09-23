import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { CandidateSuggestedJobsComponent } from "../candidate-suggested-jobs/candidate-suggested-jobs.component";
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { DataResolverService } from "../../data-resolver.service";
import { CandidateProfileComponent } from "../candidate-profile/candidate-profile.component";
import { ExperienceComponent } from "../candidate-profile/experience/experience.component";
import { SavedJobsComponent } from "../saved-jobs/saved-jobs.component";
import { NewComponent } from '../candidate-profile/new/new.component';

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
           path:'new',
           component: NewComponent,
           children: [
              {
                path: "experience",
                component: ExperienceComponent
              }
            ]
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
