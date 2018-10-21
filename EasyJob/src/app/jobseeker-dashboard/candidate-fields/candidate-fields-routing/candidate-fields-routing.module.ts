import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EducationComponent } from "../education/education.component";
import { ExperienceComponent } from "../experience/experience.component";
import { NewComponent } from "../new/new.component";
import { TestComponent } from "../testing/test.component";
import { DataFieldsService } from "../../data-fields.resolver.service";
import { CandidateProfileComponent } from "../candidate-profile/candidate-profile.component";
import { NewExperienceComponent } from "../experience/new-experience/new-experience.component";
import { EditExperienceComponent } from "../experience/edit-experience/edit-experience.component";


const candidateFieldsRoutes: Routes = [
  {
    path: "",
    component: CandidateProfileComponent,
    resolve: {
      CandidateFields: DataFieldsService
    },
    children: [
      {
        path: "create",
        children: [
          {
            path: "experience",
            component: NewExperienceComponent
          }
        ]
      },
      {
        path: "edit",
        children: [
          {
            path: "experience",
            component: EditExperienceComponent
          }
        ]
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
