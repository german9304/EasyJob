import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployerRoutingModule } from "./employer-routing/employer-routing.module";
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';

@NgModule({
  imports: [CommonModule, EmployerRoutingModule],
  declarations: [DashboardComponent, DashboardViewComponent]
})
export class EmployerDashboardModule {}
