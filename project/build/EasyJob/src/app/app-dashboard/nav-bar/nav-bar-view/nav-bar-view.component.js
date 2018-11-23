"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { LoginViewComponent } from "../../authentication/log-in/login-view/login-view.component";
var NavBarViewComponent = /** @class */ (function () {
    function NavBarViewComponent() {
    }
    NavBarViewComponent.prototype.clickedIcon = function () { };
    NavBarViewComponent.prototype.ngOnInit = function () {
        // console.log('login: ',this.auth)
        /*
       this.emailClasses = {
         'email': this.auth,
         'remove': !this.auth
       }
       */
    };
    NavBarViewComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar-view',
            templateUrl: './nav-bar-view-component.html',
            styleUrls: ['./nav-bar-view.component.scss']
        })
    ], NavBarViewComponent);
    return NavBarViewComponent;
}());
exports.NavBarViewComponent = NavBarViewComponent;
