"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing/app-routing.module");
// import { AuthenticationModule } from "../app/authentication/authentication.module";
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var jobseeker_dashboard_module_1 = require("./jobseeker-dashboard/jobseeker-dashboard.module");
var employer_dashboard_module_1 = require("./employer-dashboard/employer-dashboard.module");
var app_dashboard_module_1 = require("./app-dashboard/app-dashboard.module");
var app_component_1 = require("./app.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var auth_service_1 = require("./services/auth.service");
var auth_data_resolver_service_1 = require("./services/auth-data-resolver.service");
var style_service_service_1 = require("./services/style-service.service");
var job_data_service_1 = require("./services/job-data.service");
var test_directive_1 = require("./test.directive");
var auth_guard_service_1 = require("./services/auth-guard.service");
var AppModule = /** @class */ (function () {
    function AppModule(router) {
        // console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, page_not_found_component_1.PageNotFoundComponent, test_directive_1.TestDirective],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                app_dashboard_module_1.AppDashboardModule,
                jobseeker_dashboard_module_1.JobseekerDashboardModule,
                employer_dashboard_module_1.EmployerDashboardModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                auth_service_1.AuthService,
                auth_data_resolver_service_1.DataResolverService,
                job_data_service_1.JobDataService,
                style_service_service_1.StyleServiceService,
                auth_guard_service_1.AuthGuardService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
