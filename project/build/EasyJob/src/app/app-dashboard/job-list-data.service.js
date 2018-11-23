"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var JobListDataService = /** @class */ (function () {
    function JobListDataService(js, router, route) {
        this.js = js;
        this.router = router;
        this.route = route;
    }
    JobListDataService.prototype.resolve = function (route, state) {
        var field = route.paramMap.get("search");
        var location = route.paramMap.get("location");
        var obj = {
            field: field,
            location: location
        };
        return this.js.getJobs(obj).pipe(operators_1.take(1), operators_1.map(function (data) {
            if (data) {
                // console.log("map: ", data);
                return data;
            }
            else {
                return [];
            }
        }));
        // return this.route.paramMap.pipe(
        //   switchMap((data: ParamMap) => {
        //     const field = data.get("search");
        //     const location = data.get("location");
        //     const obj = {
        //       field,
        //       location
        //     };
        //     console.log(obj);
        //     return this.js.getJobs(obj);
        //   })
        // );
    };
    JobListDataService = __decorate([
        core_1.Injectable()
    ], JobListDataService);
    return JobListDataService;
}());
exports.JobListDataService = JobListDataService;
