import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";
import { USER } from "../../user";

@Component({
  selector: "app-dashboard",
  templateUrl: "./candidate-suggested-jobs.component.html",
  styleUrls: ["./candidate-suggested-jobs.component.css"]
})
export class CandidateSuggestedJobsComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    /*
    this.auth.getUSER().subscribe((user: USER) => {
      console.log("user ", user);
    });
    */
  }
}
