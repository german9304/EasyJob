"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(router, fb, auth) {
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.createAccountForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }
    CreateAccountComponent.prototype.ngOnInit = function () { };
    CreateAccountComponent.prototype.onSubmit = function (option) {
        var _this = this;
        // this.auth.authenticate()
        // const {value: email} = this.Email;
        // const {value: password} = this.Password;
        // console.log(email, password);
        // localStorage.setItem('option',option);
        //    if(option === "jobseeker"){
        //      return this.router.navigate(["/jobseeker"]);
        //   }else{
        //     return this.router.navigate(["/employer"]);
        //   }
        var value = this.createAccountForm.value;
        this.auth.authenticate(value).subscribe(function (res) {
            // console.log(res);
            localStorage.setItem('option', option);
            if (option === 'jobseeker') {
                return _this.router.navigate(['/jobseeker']);
            }
            else {
                return _this.router.navigate(['/employer']);
            }
        });
    };
    Object.defineProperty(CreateAccountComponent.prototype, "Email", {
        get: function () {
            return this.createAccountForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponent.prototype, "Password", {
        get: function () {
            return this.createAccountForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    CreateAccountComponent = __decorate([
        core_1.Component({
            selector: 'app-create-account',
            templateUrl: './create-account.component.html',
            styleUrls: [
                '../../sharedstyle.component.scss',
                './create-account.component.scss'
            ]
        })
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());
exports.CreateAccountComponent = CreateAccountComponent;
