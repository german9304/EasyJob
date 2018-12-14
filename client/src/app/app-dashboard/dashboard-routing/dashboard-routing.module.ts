import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LogInComponent } from '../account/log-in/log-in.component';
import { CreateAccountComponent } from '../account/create-account/create-account.component';
import { PostjobComponent } from '../postjob/postjob.component';
import { DataResolverService } from '../../services/auth-data-resolver.service';
import { JobSearchComponent } from '../job-search/job-search.component';
import { JobListDataService } from '../job-list-data.service';

const appRoutes: Routes = [
  // {
  //   path: 'nav',
  //   component: NavBarComponent,
  //   resolve: {
  //     userData: DataResolverService
  //   },
  //   children: [
  //     {
  //       path: 'bav',
  //       component: DashboardComponent
  //     },
  //     {
  //       path: 'post/job',
  //       component: PostjobComponent
  //     },
  //     {
  //       path: 'jobs',
  //       component: JobSearchComponent,
  //       resolve: {
  //         joblist: JobListDataService
  //       }
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppDashboardRoutingModule {}
