import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployerDashboardComponent } from "./dashboard/dashboard.component";
import { EmployerRoutingModule } from "./employer-routing/employer-routing.module";
import { DashboardViewComponent } from "./dashboard/dashboard-view/dashboard-view.component";

@NgModule({
  imports: [CommonModule, EmployerRoutingModule],
  declarations: [EmployerDashboardComponent, DashboardViewComponent],
  exports: [EmployerDashboardComponent]
})
export class EmployerDashboardModule {}
