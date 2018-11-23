"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CandExpEduResViewComponent = /** @class */ (function () {
    function CandExpEduResViewComponent() {
        this.fileChosen = new core_1.EventEmitter();
    }
    CandExpEduResViewComponent.prototype.ngOnInit = function () { };
    CandExpEduResViewComponent.prototype.fileSubmit = function (event) {
        this.fileChosen.emit(event);
    };
    __decorate([
        core_1.Input()
    ], CandExpEduResViewComponent.prototype, "experience", void 0);
    __decorate([
        core_1.Input()
    ], CandExpEduResViewComponent.prototype, "education", void 0);
    __decorate([
        core_1.Input()
    ], CandExpEduResViewComponent.prototype, "trackByExp", void 0);
    __decorate([
        core_1.Input()
    ], CandExpEduResViewComponent.prototype, "fileInfo", void 0);
    __decorate([
        core_1.Input()
    ], CandExpEduResViewComponent.prototype, "file", void 0);
    __decorate([
        core_1.Output()
    ], CandExpEduResViewComponent.prototype, "fileChosen", void 0);
    CandExpEduResViewComponent = __decorate([
        core_1.Component({
            selector: 'app-cand-fields-jobs-view',
            templateUrl: './cand-fields-jobs-view..component.html',
            styleUrls: ['./cand-fields-jobs-view..component.scss']
        })
    ], CandExpEduResViewComponent);
    return CandExpEduResViewComponent;
}());
exports.CandExpEduResViewComponent = CandExpEduResViewComponent;
