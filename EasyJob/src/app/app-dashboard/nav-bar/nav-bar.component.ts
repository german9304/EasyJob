import { Component, OnInit } from "@angular/core";
//import {Observable, of } from "rxjs";
import { USER } from "../../user";
import { AuthService } from "../../auth.service";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { userData: USER }) => {
      //console.log(data);
      const { userData } = data;
      const {
        userData: { auth }
      } = data;
      // console.log(auth);
      if (auth) {
        this.router.navigate(["/jobseeker"]);
        this.auth.logUser();
      }
      //this.router.navigate(["/user"]);
    });
  }
}
