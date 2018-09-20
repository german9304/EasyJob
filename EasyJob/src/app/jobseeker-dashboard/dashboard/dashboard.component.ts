import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";
import { USER } from "../../user";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
  	/*
    this.auth.getUSER().subscribe((user: USER) => {
      console.log("user ", user);
    });
    */
  }
}
