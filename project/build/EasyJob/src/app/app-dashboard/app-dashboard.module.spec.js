"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_dashboard_module_1 = require("./app-dashboard.module");
describe('AppDashboardModule', function () {
    var appDashboardModule;
    beforeEach(function () {
        appDashboardModule = new app_dashboard_module_1.AppDashboardModule();
    });
    it('should create an instance', function () {
        expect(appDashboardModule).toBeTruthy();
    });
});
