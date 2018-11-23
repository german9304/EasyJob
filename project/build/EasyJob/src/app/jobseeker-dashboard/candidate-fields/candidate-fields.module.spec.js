"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var candidate_fields_module_1 = require("./candidate-fields.module");
describe('CandidateExperienceFieldsModule', function () {
    var candidateFieldsModule;
    beforeEach(function () {
        candidateFieldsModule = new candidate_fields_module_1.CandidateFieldsModule();
    });
    it('should create an instance', function () {
        expect(candidateFieldsModule).toBeTruthy();
    });
});
