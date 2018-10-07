import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EducationComponent } from "../education/education.component";
import { ExperienceComponent } from "../experience/experience.component";
import { NewComponent } from "../new/new.component";
import { TestComponent } from "../testing/test.component";
import { DataFieldsService } from "../../data-fields.resolver.service";
import { CandidateProfileComponent } from "../candidate-profile/candidate-profile.component";

const candidateFieldsRoutes: Routes = [
  {
    path: "",
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
    redirectTo: "/",
    pathMatch: "full"
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(candidateFieldsRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class CandidateFieldsRoutingModule {}
