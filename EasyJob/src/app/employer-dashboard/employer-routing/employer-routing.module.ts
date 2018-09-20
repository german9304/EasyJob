import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EmployerDashboardComponent } from "../dashboard/dashboard.component";

const appRoutes: Routes = [
  { 
   path: "employer", 
   children:[
     {
   	 path:"",
     component: EmployerDashboardComponent
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
