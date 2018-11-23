"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateAccountViewComponent = /** @class */ (function () {
    function CreateAccountViewComponent() {
        this.submitted = new core_1.EventEmitter();
        this.selected = false;
    }
    CreateAccountViewComponent.prototype.ngOnInit = function () { };
    CreateAccountViewComponent.prototype.onSubmit = function () {
        if (this.selected) {
            this.submitted.emit(this.fieldSelected);
        }
    };
    CreateAccountViewComponent.prototype.clicked = function (number, option) {
        this.selected = true;
        this.i = number;
        this.fieldSelected = option;
    };
    __decorate([
        core_1.Input()
    ], CreateAccountViewComponent.prototype, "createaccount", void 0);
    __decorate([
        core_1.Output()
    ], CreateAccountViewComponent.prototype, "submitted", void 0);
    CreateAccountViewComponent = __decorate([
        core_1.Component({
            selector: 'app-create-account-view',
            templateUrl: './create-account-view.component.html',
            styleUrls: [
                '../../../sharedstyle.component.scss',
                './create-account-view.component.scss'
            ]
        })
    ], CreateAccountViewComponent);
    return CreateAccountViewComponent;
}());
exports.CreateAccountViewComponent = CreateAccountViewComponent;
