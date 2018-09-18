import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";

const appRoutes: Routes = [
  { 
   path: "employer", 
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

export class EmployerRoutingModule { }
