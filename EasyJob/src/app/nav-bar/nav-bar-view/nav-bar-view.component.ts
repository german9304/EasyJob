import { Component, OnInit, Input } from "@angular/core";
import {Observable, of} from "rxjs";
import {USER} from "../../authentication/user"

import { LoginViewComponent } from "../../authentication/log-in/login-view/login-view.component";

@Component({
  selector: "app-nav-bar-view",
  template: `
    <nav class="menu">
      <ul id="menu-list">
        <li class="item item1">
          <a routerLink="/" routerLinkActive="active"> Search Jobs </a>
        </li>
        <li class="item item2">
          <a routerLink="/" routerLinkActive="active"> Post Jobs</a>
        </li>
        <li class="item item3">
        <!---<p> {{user | json}} </p>--->
         <!--- <p> {{Profile | json}} <p>  --->
          <a [class.sigin-anchor]="auth"routerLink="/account/login" routerLinkActive="active"> Sign in</a>
          <p [ngClass]="emailClasses" > {{user.email }}</p>
          <div class="userProfile" *ngIf="auth">
           <ul class="items-profile" > 
              <li> item1 </li>
              <li> item2 </li>
              <li> item3 </li>
              <li> item4 </li>
            </ul>

          </div>
        </li>
        <!--- <p> {{login? 'is login' : 'not login' }} </p> --->
      </ul>
    </nav>
  `,
  styleUrls: ["./nav-bar-view.component.scss"]
})
export class NavBarViewComponent implements OnInit {
  @Input()
  user: USER;
  @Input()
  auth: boolean;
  @Input()
  emailClasses: any;
  @Input()
  Profile: any;
  @Input()
  itemsProfile: any;

  constructor() {}

  ngOnInit() {
    //console.log('login: ',this.auth)
    /*
   this.emailClasses = {
     'email': this.auth,
     'remove': !this.auth
   }
   */
  }
}
