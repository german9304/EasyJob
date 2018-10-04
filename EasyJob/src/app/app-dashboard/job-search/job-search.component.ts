import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { JobDataService } from "../../job-data.service";
import { tap, map, switchMap } from "rxjs/operators";
import { JOB } from "../../job";
@Component({
  selector: "job-search",
  templateUrl: "./job-search.component.html",
  styleUrls: ["./job-search.component.scss"]
})
export class JobSearchComponent implements OnInit {
  JOBS: JOB[] = [
    // {
    //   category: {
    //     _id: "",
    //     name: ""
    //   },
    //   title: "SOFTWARE ENGINEER",
    //   company: "MICROSOFT",
    //   location: "Monterey By",
    //   description:
    //     "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, velit."
    // },
    // {
    //   category: {
    //     _id: "",
    //     name: ""
    //   },
    //   title: "BACK-END",
    //   company: "GOOGLE",
    //   location: "San Diego",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos est natus deleniti magni, libero blanditiis. Qui voluptasconsectetur quod!"
    // }
  ];
  constructor(
    private js: JobDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getJobList();
  }
  getJobList() {
    this.route.paramMap
      .pipe(
        switchMap((data: ParamMap) => {
          // console.log(`data: ${data.get("search")}`);
          const field = data.get("search");
          const location = data.get("location");
          // console.log(location);
          const obj = {
            field,
            location
          };
          return this.js.getJobs(obj);
        })
      )
      .subscribe(data => {
        this.JOBS = data;
        console.log("param: ", this.JOBS);
      });
  }
}
