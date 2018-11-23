"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var candidate_fields_routing_module_1 = require("./candidate-fields-routing.module");
describe('CandidateFieldsRoutingModule', function () {
    var candidateFieldsRoutingModule;
    beforeEach(function () {
        candidateFieldsRoutingModule = new candidate_fields_routing_module_1.CandidateFieldsRoutingModule();
    });
    it('should create an instance', function () {
        expect(candidateFieldsRoutingModule).toBeTruthy();
    });
});
