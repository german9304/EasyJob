"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employer_dashboard_module_1 = require("./employer-dashboard.module");
describe('EmployerDashboardModule', function () {
    var employerDashboardModule;
    beforeEach(function () {
        employerDashboardModule = new employer_dashboard_module_1.EmployerDashboardModule();
    });
    it('should create an instance', function () {
        expect(employerDashboardModule).toBeTruthy();
    });
});
