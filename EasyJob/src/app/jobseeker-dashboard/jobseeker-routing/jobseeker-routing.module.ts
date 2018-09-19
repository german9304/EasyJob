import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import {JobseekerNavbarComponent} from "../jobseeker-navbar/jobseeker-navbar.component";

const appRoutes: Routes = [
  { 
   path: "user", 
   component: JobseekerNavbarComponent,
   children:[
     {
   	 path:"dashboard",
     component: DashboardComponent
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
