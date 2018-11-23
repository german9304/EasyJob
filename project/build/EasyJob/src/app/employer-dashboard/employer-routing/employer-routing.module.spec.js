"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employer_routing_module_1 = require("./employer-routing.module");
describe('EmployerRoutingModule', function () {
    var employerRoutingModule;
    beforeEach(function () {
        employerRoutingModule = new employer_routing_module_1.EmployerRoutingModule();
    });
    it('should create an instance', function () {
        expect(employerRoutingModule).toBeTruthy();
    });
});
