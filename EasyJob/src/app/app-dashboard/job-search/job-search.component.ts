import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "job-search",
  templateUrl: "./job-search.component.html",
  styleUrls: ["./job-search.component.scss"]
})
export class JobSearchComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => console.log("param: ", param));
  }
}
