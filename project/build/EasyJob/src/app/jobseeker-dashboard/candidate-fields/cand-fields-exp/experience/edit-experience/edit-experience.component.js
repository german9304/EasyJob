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
var EditExperienceComponent = /** @class */ (function () {
    function EditExperienceComponent(router, route, fb, candidateField, fieldSeriviceExperience, fieldService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.candidateField = candidateField;
        this.fieldSeriviceExperience = fieldSeriviceExperience;
        this.fieldService = fieldService;
        this.experienceForm = this.fb.group({
            position: [''],
            company: [''],
            location: [''],
            date: this.fb.group({
                start: [''],
                end: ['']
            }),
            description: ['']
        });
    }
    EditExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateExperience();
        this.route.paramMap.subscribe(function (param) { return (_this._id = param.get('id')); });
    };
    EditExperienceComponent.prototype.updateExperience = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var field = _a.field;
            var position = field.position, company = field.company, location = field.location, date = field.date, description = field.description;
            _this.experienceForm.setValue({
                position: position,
                company: company,
                location: location,
                date: date,
                description: description
            });
        });
    };
    EditExperienceComponent.prototype.save = function () {
        var _this = this;
        var value = this.experienceForm.value;
        var _id = this._id;
        var url = "/api/fields/experience/" + _id;
        this.fieldSeriviceExperience
            .updateField(url, value)
            .pipe(operators_1.switchMap(function (data) {
            // console.log(`data received: ${JSON.stringify(data)}`);
            return _this.fieldService.getFields();
        }))
            .subscribe(function (_a) {
            var experience = _a.experience;
            _this.fieldSeriviceExperience.EXPERIENCE = immutable_1.List(experience);
            _this.fieldSeriviceExperience.goBackToProfile();
        });
    };
    EditExperienceComponent.prototype.delete = function () {
        var _this = this;
        // const { value } = this.experienceForm;
        var _id = this._id;
        // console.log(this.experienceForm.value);
        var url = "/api/fields/experience/" + _id;
        this.fieldSeriviceExperience
            .deleteField(url)
            .pipe(operators_1.switchMap(function (data) {
            // console.log(`data received: ${JSON.stringify(data)}`);
            return _this.fieldService.getFields();
        }))
            .subscribe(function (_a) {
            var experience = _a.experience;
            _this.fieldSeriviceExperience.EXPERIENCE = immutable_1.List(experience);
            _this.fieldSeriviceExperience.goBackToProfile();
        });
        console.log('delete');
    };
    EditExperienceComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-experience',
            templateUrl: './edit-experience.component.html',
            styleUrls: [
                '../../../shared-profile-fields.component.scss',
                './edit-experience.component.scss'
            ]
        })
    ], EditExperienceComponent);
    return EditExperienceComponent;
}());
exports.EditExperienceComponent = EditExperienceComponent;
