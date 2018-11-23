"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var log_in_component_1 = require("./log-in/log-in.component");
var login_view_component_1 = require("./log-in/login-view/login-view.component");
var create_account_component_1 = require("./create-account/create-account.component");
var create_account_view_component_1 = require("./create-account/create-account-view/create-account-view.component");
var account_routing_module_1 = require("./account-routing/account-routing.module");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                account_routing_module_1.AccountRoutingModule
            ],
            declarations: [
                log_in_component_1.LogInComponent,
                login_view_component_1.LoginViewComponent,
                create_account_component_1.CreateAccountComponent,
                create_account_view_component_1.CreateAccountViewComponent
            ],
            exports: []
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
