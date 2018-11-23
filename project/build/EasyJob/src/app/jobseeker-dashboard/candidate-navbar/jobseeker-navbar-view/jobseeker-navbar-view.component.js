"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JobseekerNavbarViewComponent = /** @class */ (function () {
    function JobseekerNavbarViewComponent() {
        this.selected = false;
    }
    JobseekerNavbarViewComponent.prototype.ngOnInit = function () {
        // console.log(this.email)
        this.selectedClasses = {
            remove: !this.selected,
            'profile-menu': this.selected
        };
    };
    JobseekerNavbarViewComponent.prototype.clickArrow = function () {
        // console.log('click')
        this.selected = !this.selected;
        this.selectedClasses = {
            remove: !this.selected,
            'profile-menu': this.selected
        };
    };
    __decorate([
        core_1.Input()
    ], JobseekerNavbarViewComponent.prototype, "email", void 0);
    __decorate([
        core_1.Input()
    ], JobseekerNavbarViewComponent.prototype, "searchForm", void 0);
    JobseekerNavbarViewComponent = __decorate([
        core_1.Component({
            selector: 'app-jobseeker-navbar-view',
            templateUrl: './jobseeker-navbar-view.component.html',
            styleUrls: [
                '../../../jobseeker-employersharedstyle.scss',
                './jobseeker-navbar-view.component.scss'
            ]
        })
    ], JobseekerNavbarViewComponent);
    return JobseekerNavbarViewComponent;
}());
exports.JobseekerNavbarViewComponent = JobseekerNavbarViewComponent;
