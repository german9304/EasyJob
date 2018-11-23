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
var dashboard_component_1 = require("./dashboard/dashboard.component");
var employer_routing_module_1 = require("./employer-routing/employer-routing.module");
var dashboard_view_component_1 = require("./dashboard/dashboard-view/dashboard-view.component");
var employer_navbar_component_1 = require("./employer-navbar/employer-navbar.component");
var nav_bar_view_component_1 = require("./employer-navbar/nav-bar-view/nav-bar-view.component");
var EmployerDashboardModule = /** @class */ (function () {
    function EmployerDashboardModule() {
    }
    EmployerDashboardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, employer_routing_module_1.EmployerRoutingModule],
            declarations: [dashboard_component_1.EmployerDashboardComponent, dashboard_view_component_1.DashboardViewComponent, employer_navbar_component_1.EmployerNavbarComponent, nav_bar_view_component_1.NavBarViewComponent],
            exports: [dashboard_component_1.EmployerDashboardComponent]
        })
    ], EmployerDashboardModule);
    return EmployerDashboardModule;
}());
exports.EmployerDashboardModule = EmployerDashboardModule;
