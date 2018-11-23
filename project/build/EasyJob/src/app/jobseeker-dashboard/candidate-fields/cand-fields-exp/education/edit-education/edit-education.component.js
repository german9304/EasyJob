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
var immutable_1 = require("immutable");
var EditEducationComponent = /** @class */ (function () {
    function EditEducationComponent(router, route, fb, cfs, fieldServiceEducation, fields) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.cfs = cfs;
        this.fieldServiceEducation = fieldServiceEducation;
        this.fields = fields;
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
    EditEducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateEducation();
        this.route.paramMap.subscribe(function (param) { return (_this._id = param.get('id')); });
    };
    EditEducationComponent.prototype.updateEducation = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var field = _a.field;
            var school = field.school, degree = field.degree, majorField = field.majorField, date = field.date, description = field.description;
            _this.educationForm.setValue({
                school: school,
                degree: degree,
                majorField: majorField,
                date: date,
                description: description
            });
        });
    };
    EditEducationComponent.prototype.save = function () {
        var _this = this;
        var value = this.educationForm.value;
        var _id = this._id;
        var url = "/api/fields/education/" + _id;
        this.fieldServiceEducation
            .updateField(url, value)
            .pipe(operators_1.switchMap(function (data) {
            // console.log(`data received: ${JSON.stringify(data)}`);
            return _this.fields.getFields();
        }))
            .subscribe(function (_a) {
            var education = _a.education;
            _this.fieldServiceEducation.EDUCATION = immutable_1.List(education);
            _this.fieldServiceEducation.goBackToProfile();
        });
    };
    EditEducationComponent.prototype.delete = function () {
        var _this = this;
        var _id = this._id;
        // console.log(this.educationForm.value);
        var url = "/api/fields/education/" + _id;
        this.fieldServiceEducation
            .deleteField(url)
            .pipe(operators_1.switchMap(function (data) {
            //  console.log(`data received: ${JSON.stringify(data)}`);
            return _this.fields.getFields();
        }))
            .subscribe(function (_a) {
            var education = _a.education;
            _this.fieldServiceEducation.EDUCATION = immutable_1.List(education);
            _this.fieldServiceEducation.goBackToProfile();
        });
        // console.log("delete");
    };
    EditEducationComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-education',
            templateUrl: './edit-education.component.html',
            styleUrls: [
                '../../../shared-profile-fields.component.scss',
                './edit-education.component.scss'
            ]
        })
    ], EditEducationComponent);
    return EditEducationComponent;
}());
exports.EditEducationComponent = EditEducationComponent;
