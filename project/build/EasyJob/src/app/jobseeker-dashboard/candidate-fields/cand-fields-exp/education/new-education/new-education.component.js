"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewEducationComponent = /** @class */ (function () {
    function NewEducationComponent(router, fb, cf, fs) {
        this.router = router;
        this.fb = fb;
        this.cf = cf;
        this.fs = fs;
        this.educationForm = this.fb.group({
            school: [''],
            degree: [''],
            majorField: [''],
            date: this.fb.group({
                start: [''],
                end: ['']
            }),
            description: ['']
        });
    }
    NewEducationComponent.prototype.ngOnInit = function () { };
    NewEducationComponent.prototype.addEducation = function () {
        var _this = this;
        var value = this.educationForm.value;
        var url = '/api/fields/education';
        this.fs.createField(url, value).subscribe(function (res) {
            console.log(res);
            console.log("res inside " + JSON.stringify(res));
            console.log(_this.cf.EDUCATION === _this.cf.EDUCATION.push(res));
            _this.fs.EDUCATION = _this.fs.EDUCATION.push(res);
            _this.educationForm.reset();
            _this.router.navigate(['../jobseeker/profile']);
        });
    };
    NewEducationComponent = __decorate([
        core_1.Component({
            selector: 'app-new-education',
            templateUrl: './new-education.component.html',
            styleUrls: [
                '../../../shared-profile-fields.component.scss',
                './new-education.component.scss'
            ]
        })
    ], NewEducationComponent);
    return NewEducationComponent;
}());
exports.NewEducationComponent = NewEducationComponent;
