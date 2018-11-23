"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var immutable_1 = require("immutable");
var CandidateFieldsService = /** @class */ (function () {
    function CandidateFieldsService(http, auth, router, route) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.EXPERIENCE = immutable_1.List();
        this.EDUCATION = immutable_1.List();
        this.credentials = this.auth.getUserCredentials();
        this.jwt = '';
        this.httpOptions = {};
        var user = this.auth.getUserCredentials();
        var jwt = user.jwt;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: "Bearer " + jwt
            })
        };
        // console.log(`credentials ${this.httpOptions.headers.get("Authorization")}`);
    }
    CandidateFieldsService.prototype.ngOnInit = function () {
        // console.log("on init service");
    };
    /*
    *
    * Creates experience
    *
    *
    */
    CandidateFieldsService.prototype.createExperience = function (experience) {
        var _this = this;
        // console.log(this.httpOptions.headers.get("Authorization"));
        return this.http
            .post("/api/fields/experience", experience, this.auth.UserHeaders)
            .pipe(operators_1.tap(function (data) { return console.log("experience: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    /*
    *
    * Updates Experience
    *
    *
    */
    CandidateFieldsService.prototype.updateExperience = function (id, experience) {
        var _this = this;
        return this.http
            .put("/api/fields/experience/" + id, experience, this.auth.UserHeaders)
            .pipe(operators_1.tap(function (data) { return console.log("experience: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    /*
    * Get Experience
    */
    CandidateFieldsService.prototype.getExperience = function (id) {
        var _this = this;
        return this.http.get("/api/fields/experience/" + id).pipe(operators_1.tap(function (data) { return console.log("experience: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    /*
    *
    * Deletes Experience
    *
    *
    */
    CandidateFieldsService.prototype.deleteExperience = function (id) {
        var _this = this;
        return this.http
            .delete("/api/fields/experience/" + id, this.auth.UserHeaders)
            .pipe(operators_1.tap(function (data) { return console.log("experience: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    CandidateFieldsService.prototype.getEducation = function (id) {
        var _this = this;
        return this.http.get("/api/fields/education/" + id).pipe(operators_1.tap(function (data) { return console.log("education: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    CandidateFieldsService.prototype.createEducation = function (experience) {
        return this.http
            .post("/api/fields/education", experience, this.auth.UserHeaders)
            .pipe(operators_1.tap(function (data) { return console.log("education: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return rxjs_1.of(error);
        }));
    };
    CandidateFieldsService.prototype.updateEducation = function (id, education) {
        var _this = this;
        return this.http
            .put("/api/fields/education/" + id, education, this.auth.UserHeaders)
            .pipe(operators_1.tap(function (data) { return console.log("education: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    CandidateFieldsService.prototype.deleteEducation = function (id) {
        var _this = this;
        return this.http
            .delete("/api/fields/education/" + id, this.auth.UserHeaders)
            .pipe(operators_1.tap(function (data) { return console.log("education: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    CandidateFieldsService.prototype.getFields = function () {
        return this.http.get("/api/fields/candidate").pipe(operators_1.tap(function (fields) {
            console.log("fields: " + fields.experience);
        }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return rxjs_1.of(error);
        }));
    };
    CandidateFieldsService.prototype.goBackToProfile = function () {
        this.router.navigate(['../jobseeker/profile']);
    };
    CandidateFieldsService.prototype.handleError = function (error) {
        console.log("error " + error.error + " " + error.status);
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    CandidateFieldsService = __decorate([
        core_1.Injectable()
    ], CandidateFieldsService);
    return CandidateFieldsService;
}());
exports.CandidateFieldsService = CandidateFieldsService;
