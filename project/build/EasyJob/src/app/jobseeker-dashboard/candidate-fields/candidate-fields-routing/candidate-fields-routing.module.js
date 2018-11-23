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
var cand_fields_jobs_component_1 = require("../cand-fields-exp/cand-fields-jobs/cand-fields-jobs.component");
var data_fields_resolver_service_1 = require("../../services/data-fields.resolver.service");
var candidateFieldsRoutes = [
    {
        path: '',
        component: cand_fields_jobs_component_1.CandExpEduResComponent,
        resolve: {
            CandidateFields: data_fields_resolver_service_1.DataFieldsService
        },
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var CandidateFieldsRoutingModule = /** @class */ (function () {
    function CandidateFieldsRoutingModule() {
    }
    CandidateFieldsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(candidateFieldsRoutes)],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], CandidateFieldsRoutingModule);
    return CandidateFieldsRoutingModule;
}());
exports.CandidateFieldsRoutingModule = CandidateFieldsRoutingModule;
