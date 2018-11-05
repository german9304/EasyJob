import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { JobDataService } from "../../services/job-data.service";
import { tap, map, switchMap } from "rxjs/operators";
import { FormBuilder } from "@angular/forms";
import { JOB } from "../../job";
import { DataFieldsService } from "../../jobseeker-dashboard/services/data-fields.resolver.service";
@Component({
  selector: "job-search",
  templateUrl: "./job-search.component.html",
  styleUrls: ["./job-search.component.scss"]
})
export class JobSearchComponent implements OnInit {
  JOBS: JOB[] = [];
  constructor(
    private js: JobDataService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  searchForm = this.fb.group({
    field: [""],
    location: [""]
  });
  ngOnInit() {
    this.getJobList();
  }
  getJobList() {
    this.route.paramMap.subscribe(data => {
      const str = data.get("search");

      // console.log("data: ");
    });
    this.route.data.subscribe((data: { joblist: JOB[] }) => {
      const { joblist } = data;
      this.JOBS = joblist;
    });
  }
  getSearchJobs(job: JOB) {
    // const params = this.route.paramMap.subscribe(param => console.log(param));
    const location = this.route.snapshot.paramMap.get("location");
    const search = this.route.snapshot.paramMap.get("search");
    console.log(job);
    console.log(` ${location}  ${search}`);
    this.router.navigate(["/jobseeker/job/search", { search, location }]);
  }
  searchJobs() {
    const { field, location } = this.searchForm.value;

    this.js.goHome(field, location)
      ? this.router.navigate(["../"])
      : this.router.navigate(["./jobs", { search: field, location }]);
  }
}

// this.route.paramMap
//   .pipe(
//     switchMap((data: ParamMap) => {
//       console.log(`data: ${data.get("search")}`);
//       const field = data.get("search");
//       const location = data.get("location");
//       console.log(location);
//       const obj = {
//         field,
//         location
//       };
//       return this.js.getJobs(obj);
//     })
//   )
//   .subscribe(data => {
//     this.JOBS = data;
//     console.log("param: ", this.JOBS);
//   });
