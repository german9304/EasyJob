import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployerDashboardComponent } from "./dashboard/dashboard.component";
import { EmployerRoutingModule } from "./employer-routing/employer-routing.module";
import { DashboardViewComponent } from "./dashboard/dashboard-view/dashboard-view.component";
import { EmployerNavbarComponent } from './employer-navbar/employer-navbar.component';
import { NavBarViewComponent } from './employer-navbar/nav-bar-view/nav-bar-view.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  imports: [CommonModule, EmployerRoutingModule],
  declarations: [EmployerDashboardComponent, DashboardViewComponent, EmployerNavbarComponent, NavBarViewComponent, ProfileDashboardComponent, SearchFormComponent],
  exports: [EmployerDashboardComponent]
})
export class EmployerDashboardModule {}
