import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { LogInComponent } from "../log-in/log-in.component";
import { CreateAccountComponent } from "../create-account/create-account.component";
import { PostjobComponent } from "../postjob/postjob.component";
import { DataResolverService } from "../../auth-data-resolver.service";
import { AccountComponent } from "../account/account.component";
import { JobSearchComponent } from "../job-search/job-search.component";

const appRoutes: Routes = [
  {
    path: "",
    component: NavBarComponent,
    resolve: {
      userData: DataResolverService
    },
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "post/job",
        component: PostjobComponent
      },
      {
        path: "jobs",
        component: JobSearchComponent
      },
      {
        path: "account",
        component: AccountComponent,
        children: [
          {
            path: "login",
            component: LogInComponent
          },
          {
            path: "create",
            component: CreateAccountComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppDashboardRoutingModule {}
