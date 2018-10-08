import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { USER } from "../../user";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-jobseeker-navbar",
  templateUrl: "./jobseeker-navbar.component.html",
  styleUrls: ["./jobseeker-navbar.component.css"]
})
export class JobseekerNavbarComponent implements OnInit {
  email: string;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.auth.getUSER().subscribe(user => {
      if (user) {
        this.email = user.email;
      }
    });
  }
}
