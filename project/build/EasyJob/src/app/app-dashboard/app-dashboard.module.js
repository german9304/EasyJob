"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Modules
*/
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var dashboard_routing_module_1 = require("./dashboard-routing/dashboard-routing.module");
var job_list_data_service_1 = require("./job-list-data.service");
/*
Components
*/
var dashboard_component_1 = require("./dashboard/dashboard.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var nav_bar_view_component_1 = require("./nav-bar/nav-bar-view/nav-bar-view.component");
var postjob_component_1 = require("./postjob/postjob.component");
var postjob_view_component_1 = require("./postjob/postjob-view/postjob-view.component");
var dashboard_view_component_1 = require("./dashboard/dashboard-view/dashboard-view.component");
var categories_view_component_1 = require("./dashboard/categories-view/categories-view.component");
var job_search_component_1 = require("./job-search/job-search.component");
var job_serch_list_component_1 = require("./job-search/job-serch-list/job-serch-list.component");
var AppDashboardModule = /** @class */ (function () {
    function AppDashboardModule() {
    }
    AppDashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dashboard_routing_module_1.AppDashboardRoutingModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                nav_bar_component_1.NavBarComponent,
                nav_bar_view_component_1.NavBarViewComponent,
                postjob_component_1.PostjobComponent,
                postjob_view_component_1.PostjobViewComponent,
                dashboard_view_component_1.DashboardViewComponent,
                categories_view_component_1.CategoriesViewComponent,
                job_search_component_1.JobSearchComponent,
                job_serch_list_component_1.JobSerchListComponent
            ],
            providers: [job_list_data_service_1.JobListDataService]
        })
    ], AppDashboardModule);
    return AppDashboardModule;
}());
exports.AppDashboardModule = AppDashboardModule;
