import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";

import { DataResolverService } from "../../services/auth-data-resolver.service";
import { DataFieldsService } from "../services/data-fields.resolver.service";
import { AuthGuardService } from "../../services/auth-guard.service";
/*
@Components 
*/
import { CandidateSuggestedJobsComponent } from "../candidate-suggested-jobs/candidate-suggested-jobs.component";
import { JobseekerNavbarComponent } from "../candidate-navbar/jobseeker-navbar.component";
import { CandidateProfileComponent } from "../candidate-fields/candidate-profile/candidate-profile.component";
import { AppliedJobsComponent } from "../applied-jobs/applied-jobs.component";
import { SavedJobsComponent } from "../saved-jobs/saved-jobs.component";
import { CandidateSearchJobsComponent } from "../candidate-search-jobs/candidate-search-jobs.component";

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
        path: "job/search",
        component: CandidateSearchJobsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "profile",
        loadChildren:
          "../candidate-fields/candidate-fields.module#CandidateFieldsModule"
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

