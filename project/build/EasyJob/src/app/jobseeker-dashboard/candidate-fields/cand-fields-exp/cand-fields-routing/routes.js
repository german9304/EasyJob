"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cand_fields_jobs_component_1 = require("../cand-fields-jobs/cand-fields-jobs.component");
exports.candidateFieldsRoutes = [
    {
        path: '',
        component: cand_fields_jobs_component_1.CandExpEduResComponent,
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
