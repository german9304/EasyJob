import { Component, OnInit } from "@angular/core";
//import {Observable, of } from "rxjs";
import { USER } from "../authentication/user";
import { AuthService } from "../authentication/auth.service";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  login: boolean = false;
  user: USER;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getUSER().subscribe(user => {
      const { auth } = user;
      if (auth) {
        console.log(auth);
        this.auth.isLoggedin = true;
        this.user = user;
        this.login = this.auth.isLoggedin;
        console.log(this.login);
      }
    });
  }
}
