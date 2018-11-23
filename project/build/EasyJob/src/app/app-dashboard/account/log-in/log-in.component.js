"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LogInComponent = /** @class */ (function () {
    function LogInComponent(router, fb, auth) {
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }
    LogInComponent.prototype.ngOnInit = function () {
        // console.log("is logged in: ", this.auth.isLoggedin);
    };
    LogInComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.loginForm.value);
        var value = this.loginForm.value;
        this.auth.login(value).subscribe(function () {
            return _this.router.navigate(['/jobseeker']);
        });
        this.loginForm.setValue({
            email: '',
            password: ''
        });
        // console.log("submited");
    };
    LogInComponent.prototype.storeField = function (option) {
        this.option = true;
        localStorage.setItem('option', option);
    };
    Object.defineProperty(LogInComponent.prototype, "userName", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogInComponent.prototype, "PassWord", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LogInComponent = __decorate([
        core_1.Component({
            selector: 'app-log-in',
            templateUrl: './log-in.component.html',
            styleUrls: ['../../sharedstyle.component.scss', './log-in.component.css']
        })
    ], LogInComponent);
    return LogInComponent;
}());
exports.LogInComponent = LogInComponent;
