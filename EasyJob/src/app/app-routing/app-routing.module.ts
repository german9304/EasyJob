import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { EmployerDashboardComponent } from "../employer-dashboard/dashboard/dashboard.component";
import { DataResolverService } from "../auth-data-resolver.service";
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes /* { enableTracing: true }*/)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
