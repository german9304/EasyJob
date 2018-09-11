import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "../log-in/log-in.component";
import {CreateAccountComponent} from '../create-account/create-account.component'
import {AccountComponent} from '../account/account.component'

const appRoutes: Routes = [
  {

  	path:"account",
  	component: AccountComponent,
  	children:[
  	   {
        path:"login",
        component:LogInComponent

  	   },{

        path:"create",
        component: CreateAccountComponent
  	   }
  	]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule {}
