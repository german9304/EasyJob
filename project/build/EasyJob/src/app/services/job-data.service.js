"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var JobDataService = /** @class */ (function () {
    function JobDataService(http) {
        this.http = http;
        this.jobcreateUrl = "";
    }
    JobDataService.prototype.createAJob = function (job) {
        return;
    };
    JobDataService.prototype.searchCategories = function (data) {
        console.log(data);
        if (!data.trim()) {
            return rxjs_1.of([]);
        }
        // console.log("res: ", data);
        return this.http
            .get("api/job/categories?search=" + data)
            .pipe(operators_1.tap(function (categories) { return console.log(categories); }, operators_1.catchError(function (err) { return rxjs_1.of(err); })));
    };
    JobDataService.prototype.getJobs = function (_a) {
        var field = _a.field, location = _a.location;
        return this.http
            .get("api/candidate/jobs?search=" + field + "&location=" + location)
            .pipe(operators_1.tap(function (data) { return console.log(data); }, operators_1.catchError(function (err) { return rxjs_1.of(err); })));
    };
    JobDataService.prototype.goHome = function (field, location) {
        return !field.trim() && !location.trim();
    };
    JobDataService.prototype.searchWord = function (word) {
        // console.log(word);
    };
    JobDataService = __decorate([
        core_1.Injectable()
    ], JobDataService);
    return JobDataService;
}());
exports.JobDataService = JobDataService;
