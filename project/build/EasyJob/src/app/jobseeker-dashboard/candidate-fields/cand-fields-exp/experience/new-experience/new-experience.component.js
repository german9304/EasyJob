"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewExperienceComponent = /** @class */ (function () {
    function NewExperienceComponent(router, fb, fieldServiceExperience) {
        this.router = router;
        this.fb = fb;
        this.fieldServiceExperience = fieldServiceExperience;
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
    NewExperienceComponent.prototype.ngOnInit = function () {
        // console.log('expform: ',this.expForm);
        // console.log('position: ',this.position);
    };
    NewExperienceComponent.prototype.submitForm = function () {
        var _this = this;
        var value = this.experienceForm.value;
        // console.log(value);
        var url = '/api/fields/experience';
        this.fieldServiceExperience
            .createField(url, value)
            .subscribe(function (res) {
            // console.log(`res inside ${JSON.stringify(res)}`);
            console.log(_this.fieldServiceExperience.EXPERIENCE ===
                _this.fieldServiceExperience.EXPERIENCE.push(res));
            _this.fieldServiceExperience.EXPERIENCE = _this.fieldServiceExperience.EXPERIENCE.push(res);
            _this.experienceForm.reset();
            _this.fieldServiceExperience.goBackToProfile();
        });
    };
    NewExperienceComponent = __decorate([
        core_1.Component({
            selector: 'app-new-experience',
            templateUrl: './new-experience.component.html',
            styleUrls: [
                '../../../shared-profile-fields.component.scss',
                './new-experience.component.scss'
            ]
        })
    ], NewExperienceComponent);
    return NewExperienceComponent;
}());
exports.NewExperienceComponent = NewExperienceComponent;
