import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USER } from '../../../user';

// import { LoginViewComponent } from "../../authentication/log-in/login-view/login-view.component";

@Component({
  selector: 'app-nav-bar-view',
  templateUrl: './nav-bar-view-component.html',
  styleUrls: ['./nav-bar-view.component.scss']
})
export class NavBarViewComponent implements OnInit {
  @Input() url: string;
  constructor() {}
  clickedIcon() {}
  ngOnInit() {
    // console.log(this.url);
    // console.log('login: ',this.auth)
    /*
   this.emailClasses = {
     'email': this.auth,
     'remove': !this.auth
   }
   */
  }
}
