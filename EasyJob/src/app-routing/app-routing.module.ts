import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../app/page-not-found/page-not-found.component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
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
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
