import { Component, OnInit } from "@angular/core";
//import {Observable, of } from "rxjs";
import { USER } from "../../user";
import { AuthService } from "../../services/auth.service";
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

  ngOnInit() {}
}
