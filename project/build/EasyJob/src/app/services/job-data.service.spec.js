"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var job_data_service_1 = require("./job-data.service");
describe('JobDataService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [job_data_service_1.JobDataService]
        });
    });
    it('should be created', testing_1.inject([job_data_service_1.JobDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
