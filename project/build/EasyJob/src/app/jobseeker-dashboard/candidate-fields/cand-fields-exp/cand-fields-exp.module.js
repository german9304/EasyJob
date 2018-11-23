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
var forms_1 = require("@angular/forms");
var cand_fields_routing_module_1 = require("./cand-fields-routing/cand-fields-routing.module");
var cand_fields_jobs_component_1 = require("./cand-fields-jobs/cand-fields-jobs.component");
var cand_fields_jobs_view_component_1 = require("./cand-fields-jobs/cand-fields-jobs-view/cand-fields-jobs-view.component");
var education_list_component_1 = require("./education-list/education-list.component");
var experience_list_component_1 = require("./experience-list/experience-list.component");
var new_experience_component_1 = require("./experience/new-experience/new-experience.component");
var new_education_component_1 = require("./education/new-education/new-education.component");
var edit_experience_component_1 = require("./experience/edit-experience/edit-experience.component");
var edit_education_component_1 = require("./education/edit-education/edit-education.component");
var candidate_files_component_1 = require("./candidate-files/candidate-files.component");
var candidate_resume_component_1 = require("./candidate-files/candidate-resume/candidate-resume.component");
var CandFieldsExpModule = /** @class */ (function () {
    function CandFieldsExpModule() {
    }
    CandFieldsExpModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.ReactiveFormsModule, router_1.RouterModule, cand_fields_routing_module_1.ExpEduResFieldsRoutingModule
            ],
            declarations: [
                cand_fields_jobs_component_1.CandExpEduResComponent,
                cand_fields_jobs_view_component_1.CandExpEduResViewComponent,
                education_list_component_1.EducationListComponent,
                experience_list_component_1.ExperienceListComponent,
                new_experience_component_1.NewExperienceComponent,
                new_education_component_1.NewEducationComponent,
                edit_experience_component_1.EditExperienceComponent,
                edit_education_component_1.EditEducationComponent,
                candidate_files_component_1.CandidateFilesComponent,
                candidate_resume_component_1.CandidateResumeComponent
            ],
            exports: [cand_fields_jobs_component_1.CandExpEduResComponent]
        })
    ], CandFieldsExpModule);
    return CandFieldsExpModule;
}());
exports.CandFieldsExpModule = CandFieldsExpModule;
