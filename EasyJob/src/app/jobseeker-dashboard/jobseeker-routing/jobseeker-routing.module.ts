import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { DataResolverService } from "../../data-resolver.service";
import { CandidateProfileComponent } from "../candidate-profile/candidate-profile.component";
const appRoutes: Routes = [
  {
    path: "jobseeker",
    component: JobseekerNavbarComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "profile",
        component: CandidateProfileComponent
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
