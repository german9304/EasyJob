import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EmployerDashboardComponent } from '../employer-dashboard/dashboard/dashboard.component';
import { DataResolverService } from '../services/auth-data-resolver.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostJobComponent } from '../post-job/post-job.component';
import { SearchResultJobsComponent } from '../search-result-jobs/search-result-jobs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'post-job',
        component: PostJobComponent
      },
      {
        path: 'account',
        loadChildren: '../account/account.module#AccountModule'
      },
      {
        path: 'job',
        component: SearchResultJobsComponent
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
