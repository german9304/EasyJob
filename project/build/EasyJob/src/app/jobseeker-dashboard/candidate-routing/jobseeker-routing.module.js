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
var auth_guard_service_1 = require("../../services/auth-guard.service");
/*
@Components
*/
var candidate_suggested_jobs_component_1 = require("../candidate-suggested-jobs/candidate-suggested-jobs.component");
var jobseeker_navbar_component_1 = require("../candidate-navbar/jobseeker-navbar.component");
// import { CandidateProfileComponent } from '../candidate-fields/candidate-profile/candidate-profile.component';
var applied_jobs_component_1 = require("../applied-jobs/applied-jobs.component");
var saved_jobs_component_1 = require("../saved-jobs/saved-jobs.component");
var candidate_search_jobs_component_1 = require("../candidate-search-jobs/candidate-search-jobs.component");
var appRoutes = [
    {
        path: 'jobseeker',
        component: jobseeker_navbar_component_1.JobseekerNavbarComponent,
        children: [
            {
                path: 'saved-jobs',
                component: saved_jobs_component_1.SavedJobsComponent
            },
            {
                path: 'suggested-jobs',
                component: candidate_suggested_jobs_component_1.CandidateSuggestedJobsComponent
            },
            {
                path: 'applied-jobs',
                component: applied_jobs_component_1.AppliedJobsComponent
            },
            {
                path: 'job/search',
                component: candidate_search_jobs_component_1.CandidateSearchJobsComponent,
                canActivate: [auth_guard_service_1.AuthGuardService]
            },
            {
                path: 'profile',
                resolve: {},
                loadChildren: '../candidate-fields/candidate-fields.module#CandidateFieldsModule'
            },
            {
                path: '',
                redirectTo: 'saved-jobs',
                pathMatch: 'full'
            }
        ]
    }
];
var JobseekerRoutingModule = /** @class */ (function () {
    function JobseekerRoutingModule() {
    }
    JobseekerRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(appRoutes)],
            declarations: [],
            exports: [router_1.RouterModule]
        })
    ], JobseekerRoutingModule);
    return JobseekerRoutingModule;
}());
exports.JobseekerRoutingModule = JobseekerRoutingModule;
