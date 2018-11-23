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
var router_1 = require("@angular/router");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var nav_bar_component_1 = require("../nav-bar/nav-bar.component");
var postjob_component_1 = require("../postjob/postjob.component");
var auth_data_resolver_service_1 = require("../../services/auth-data-resolver.service");
var job_search_component_1 = require("../job-search/job-search.component");
var job_list_data_service_1 = require("../job-list-data.service");
var appRoutes = [
    {
        path: "",
        component: nav_bar_component_1.NavBarComponent,
        resolve: {
            userData: auth_data_resolver_service_1.DataResolverService
        },
        children: [
            {
                path: "",
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: "post/job",
                component: postjob_component_1.PostjobComponent
            },
            {
                path: "jobs",
                component: job_search_component_1.JobSearchComponent,
                resolve: {
                    joblist: job_list_data_service_1.JobListDataService
                }
            },
            {
                path: "account",
                loadChildren: "../account/account.module#AccountModule"
            }
        ]
    }
];
var AppDashboardRoutingModule = /** @class */ (function () {
    function AppDashboardRoutingModule() {
    }
    AppDashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(appRoutes)],
            declarations: [],
            exports: [router_1.RouterModule]
        })
    ], AppDashboardRoutingModule);
    return AppDashboardRoutingModule;
}());
exports.AppDashboardRoutingModule = AppDashboardRoutingModule;
