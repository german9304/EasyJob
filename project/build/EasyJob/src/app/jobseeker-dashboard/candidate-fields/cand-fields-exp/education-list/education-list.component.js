"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EducationListComponent = /** @class */ (function () {
    function EducationListComponent() {
    }
    EducationListComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], EducationListComponent.prototype, "EDUCATION", void 0);
    EducationListComponent = __decorate([
        core_1.Component({
            selector: 'app-education-list',
            templateUrl: './education-list.component.html',
            styleUrls: ['../../shared-fields-style.scss', './education-list.component.scss']
        })
    ], EducationListComponent);
    return EducationListComponent;
}());
exports.EducationListComponent = EducationListComponent;
