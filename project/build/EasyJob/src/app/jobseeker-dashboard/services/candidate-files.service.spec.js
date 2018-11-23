"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var candidate_files_service_1 = require("./candidate-files.service");
describe('CandidateFilesService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(candidate_files_service_1.CandidateFilesService);
        expect(service).toBeTruthy();
    });
});
