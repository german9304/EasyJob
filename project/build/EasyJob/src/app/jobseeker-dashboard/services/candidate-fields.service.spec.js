"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var candidate_fields_service_1 = require("./candidate-fields.service");
describe('CandidateFieldsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [candidate_fields_service_1.CandidateFieldsService]
        });
    });
    it('should be created', testing_1.inject([candidate_fields_service_1.CandidateFieldsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
