"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jobseeker_routing_module_1 = require("./jobseeker-routing.module");
describe('JobseekerRoutingModule', function () {
    var jobseekerRoutingModule;
    beforeEach(function () {
        jobseekerRoutingModule = new jobseeker_routing_module_1.JobseekerRoutingModule();
    });
    it('should create an instance', function () {
        expect(jobseekerRoutingModule).toBeTruthy();
    });
});
