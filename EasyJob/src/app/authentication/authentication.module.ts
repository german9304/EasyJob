import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogInComponent } from "./log-in/log-in.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { LoginViewComponent } from "./log-in/login-view/login-view.component";
import { AuthRoutingModule } from "./auth-routing/auth-routing.module";

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LogInComponent, CreateAccountComponent, LoginViewComponent]
})
export class AuthenticationModule {}
