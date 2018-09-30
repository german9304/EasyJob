import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { USER } from "./user";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { StyleServiceService } from "./style-service.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private sts: StyleServiceService
  ) {}
  ngOnInit() {
    console.log(this.auth.isLoggedin);
    console.log();
  }
 
}
