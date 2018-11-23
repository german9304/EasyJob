"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jobseeker_dashboard_module_1 = require("./jobseeker-dashboard.module");
describe('JobseekerDashboardModule', function () {
    var jobseekerDashboardModule;
    beforeEach(function () {
        jobseekerDashboardModule = new jobseeker_dashboard_module_1.JobseekerDashboardModule();
    });
    it('should create an instance', function () {
        expect(jobseekerDashboardModule).toBeTruthy();
    });
});
