import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EmployerDashboardComponent } from '../employer-dashboard/dashboard/dashboard.component';
import { DataResolverService } from '../services/auth-data-resolver.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes /*{ enableTracing: true }*/)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
