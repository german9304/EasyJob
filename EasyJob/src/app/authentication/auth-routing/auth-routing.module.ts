import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "../log-in/log-in.component";

const appRoutes: Routes = [
  {
    path: "Login",
    component: LogInComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule {}
