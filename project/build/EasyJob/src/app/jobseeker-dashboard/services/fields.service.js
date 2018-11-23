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
var immutable_1 = require("immutable");
var operators_1 = require("rxjs/operators");
var FieldsService = /** @class */ (function () {
    function FieldsService(http, auth, router, route) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.EXPERIENCE = immutable_1.List();
        this.EDUCATION = immutable_1.List();
    }
    FieldsService.prototype.createField = function (url, field) {
        var _this = this;
        return this.http.post(url, field, this.auth.UserHeaders).pipe(operators_1.tap(function (data) { return console.log("field " + JSON.stringify(data)); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    FieldsService.prototype.updateField = function (url, field) {
        var _this = this;
        return this.http.put(url, field, this.auth.UserHeaders).pipe(operators_1.tap(function (data) { return console.log("experience: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    FieldsService.prototype.deleteField = function (url) {
        var _this = this;
        return this.http.delete(url, this.auth.UserHeaders).pipe(operators_1.tap(function (data) { return console.log("experience: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    FieldsService.prototype.getField = function (url) {
        var _this = this;
        return this.http.get(url).pipe(operators_1.tap(function (data) { return console.log("experience: " + data); }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return _this.handleError(error);
        }));
    };
    FieldsService.prototype.getFields = function () {
        return this.http.get("/api/fields/candidate").pipe(operators_1.tap(function (fields) {
            console.log("fields: " + fields);
        }), operators_1.catchError(function (error) {
            console.log("the error is " + error);
            return rxjs_1.of(error);
        }));
    };
    FieldsService.prototype.goBackToProfile = function () {
        this.router.navigate(['../jobseeker/profile']);
    };
    FieldsService.prototype.handleError = function (error) {
        console.log("error " + error.error + " " + error.status);
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    FieldsService = __decorate([
        core_1.Injectable()
    ], FieldsService);
    return FieldsService;
}());
exports.FieldsService = FieldsService;
