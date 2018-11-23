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
var candidate_fields_routing_module_1 = require("./candidate-fields-routing/candidate-fields-routing.module");
var cand_fields_exp_module_1 = require("./cand-fields-exp/cand-fields-exp.module");
var CandidateFieldsModule = /** @class */ (function () {
    function CandidateFieldsModule() {
    }
    CandidateFieldsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                candidate_fields_routing_module_1.CandidateFieldsRoutingModule,
                cand_fields_exp_module_1.CandFieldsExpModule
            ],
            declarations: [],
            exports: []
        })
    ], CandidateFieldsModule);
    return CandidateFieldsModule;
}());
exports.CandidateFieldsModule = CandidateFieldsModule;
