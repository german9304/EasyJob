"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JobSearchComponent = /** @class */ (function () {
    function JobSearchComponent(js, router, route, fb) {
        this.js = js;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.JOBS = [];
        this.searchForm = this.fb.group({
            field: [''],
            location: ['']
        });
    }
    JobSearchComponent.prototype.ngOnInit = function () {
        this.getJobList();
    };
    JobSearchComponent.prototype.getJobList = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            var str = data.get('search');
            // console.log("data: ");
        });
        this.route.data.subscribe(function (data) {
            var joblist = data.joblist;
            _this.JOBS = joblist;
        });
    };
    JobSearchComponent.prototype.getSearchJobs = function (job) {
        // const params = this.route.paramMap.subscribe(param => console.log(param));
        var location = this.route.snapshot.paramMap.get('location');
        var search = this.route.snapshot.paramMap.get('search');
        console.log(job);
        console.log(" " + location + "  " + search);
        this.router.navigate(['/jobseeker/job/search', { search: search, location: location }]);
    };
    JobSearchComponent.prototype.searchJobs = function () {
        var _a = this.searchForm.value, field = _a.field, location = _a.location;
        this.js.goHome(field, location)
            ? this.router.navigate(['../'])
            : this.router.navigate(['./jobs', { search: field, location: location }]);
    };
    JobSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-job-search',
            templateUrl: './job-search.component.html',
            styleUrls: ['./job-search.component.scss']
        })
    ], JobSearchComponent);
    return JobSearchComponent;
}());
exports.JobSearchComponent = JobSearchComponent;
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
