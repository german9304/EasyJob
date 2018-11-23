"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JobseekerNavbarComponent = /** @class */ (function () {
    function JobseekerNavbarComponent(fb, auth, router, route) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.searchBar = this.fb.group({
            search: [''],
            address: ['']
        });
    }
    JobseekerNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUSER().subscribe(function (user) {
            if (user) {
                _this.email = user.email;
            }
        });
    };
    JobseekerNavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-jobseeker-navbar',
            templateUrl: './jobseeker-navbar.component.html',
            styleUrls: ['./jobseeker-navbar.component.css']
        })
    ], JobseekerNavbarComponent);
    return JobseekerNavbarComponent;
}());
exports.JobseekerNavbarComponent = JobseekerNavbarComponent;
