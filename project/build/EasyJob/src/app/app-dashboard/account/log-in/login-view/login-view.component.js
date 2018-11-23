"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginViewComponent = /** @class */ (function () {
    function LoginViewComponent() {
        this.isSubmited = new core_1.EventEmitter();
        this.fieldSelected = new core_1.EventEmitter();
    }
    LoginViewComponent.prototype.ngOnInit = function () { };
    LoginViewComponent.prototype.onSubmit = function () {
        this.isSubmited.emit(null);
    };
    LoginViewComponent.prototype.clicked = function (number, option) {
        this.i = number;
        this.fieldSelected.emit(option);
    };
    __decorate([
        core_1.Input()
    ], LoginViewComponent.prototype, "groupForm", void 0);
    __decorate([
        core_1.Output()
    ], LoginViewComponent.prototype, "isSubmited", void 0);
    __decorate([
        core_1.Output()
    ], LoginViewComponent.prototype, "fieldSelected", void 0);
    LoginViewComponent = __decorate([
        core_1.Component({
            selector: 'app-login-view',
            templateUrl: './login-view.component.html',
            styleUrls: [
                '../../../sharedstyle.component.scss',
                './login-view.component.scss'
            ]
        })
    ], LoginViewComponent);
    return LoginViewComponent;
}());
exports.LoginViewComponent = LoginViewComponent;
