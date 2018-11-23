"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  @Modules
*/
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var candidate_suggested_jobs_component_1 = require("./candidate-suggested-jobs/candidate-suggested-jobs.component");
var jobseeker_routing_module_1 = require("./candidate-routing/jobseeker-routing.module");
var forms_1 = require("@angular/forms");
/*
  @Components
*/
var candidate_suggested_jobs_view_component_1 = require("./candidate-suggested-jobs/candidate-suggested-jobs-view/candidate-suggested-jobs-view.component");
var jobseeker_navbar_component_1 = require("./candidate-navbar/jobseeker-navbar.component");
var jobseeker_navbar_view_component_1 = require("./candidate-navbar/jobseeker-navbar-view/jobseeker-navbar-view.component");
var saved_jobs_component_1 = require("./saved-jobs/saved-jobs.component");
var saved_jobs_view_component_1 = require("./saved-jobs/saved-jobs-view/saved-jobs-view.component");
/*
Serivice
*/
var get_education_field_service_1 = require("./candidate-fields/cand-fields-exp/get-education-field.service");
var get_experience_field_service_1 = require("./candidate-fields/cand-fields-exp/get-experience-field.service");
var candidate_fields_service_1 = require("./services/candidate-fields.service");
var applied_jobs_component_1 = require("./applied-jobs/applied-jobs.component");
var applied_jobs_view_component_1 = require("./applied-jobs/applied-jobs-view/applied-jobs-view.component");
var data_fields_resolver_service_1 = require("./services/data-fields.resolver.service");
var candidate_search_jobs_component_1 = require("./candidate-search-jobs/candidate-search-jobs.component");
var candidate_files_service_1 = require("./services/candidate-files.service");
var fields_service_1 = require("./services/fields.service");
var JobseekerDashboardModule = /** @class */ (function () {
    function JobseekerDashboardModule() {
    }
    JobseekerDashboardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, jobseeker_routing_module_1.JobseekerRoutingModule],
            declarations: [
                candidate_suggested_jobs_component_1.CandidateSuggestedJobsComponent,
                candidate_suggested_jobs_view_component_1.DashboardViewComponent,
                jobseeker_navbar_component_1.JobseekerNavbarComponent,
                jobseeker_navbar_view_component_1.JobseekerNavbarViewComponent,
                saved_jobs_component_1.SavedJobsComponent,
                saved_jobs_view_component_1.SavedJobsViewComponent,
                applied_jobs_component_1.AppliedJobsComponent,
                applied_jobs_view_component_1.AppliedJobsViewComponent,
                candidate_search_jobs_component_1.CandidateSearchJobsComponent
            ],
            providers: [
                candidate_fields_service_1.CandidateFieldsService,
                get_experience_field_service_1.GetExperienceFieldService,
                data_fields_resolver_service_1.DataFieldsService,
                get_education_field_service_1.GetEducationFieldService,
                candidate_files_service_1.CandidateFilesService,
                fields_service_1.FieldsService
            ]
        })
    ], JobseekerDashboardModule);
    return JobseekerDashboardModule;
}());
exports.JobseekerDashboardModule = JobseekerDashboardModule;
