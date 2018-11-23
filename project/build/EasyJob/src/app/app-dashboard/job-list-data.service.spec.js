"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var job_list_data_service_1 = require("./job-list-data.service");
describe('JobListDataService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [job_list_data_service_1.JobListDataService]
        });
    });
    it('should be created', testing_1.inject([job_list_data_service_1.JobListDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
