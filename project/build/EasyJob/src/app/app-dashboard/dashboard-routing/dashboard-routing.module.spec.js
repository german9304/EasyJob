"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_routing_module_1 = require("./dashboard-routing.module");
describe("AppDashboardRoutingModule", function () {
    var appDashboardRoutingModule;
    beforeEach(function () {
        appDashboardRoutingModule = new dashboard_routing_module_1.AppDashboardRoutingModule();
    });
    it("should create an instance", function () {
        expect(appDashboardRoutingModule).toBeTruthy();
    });
});
