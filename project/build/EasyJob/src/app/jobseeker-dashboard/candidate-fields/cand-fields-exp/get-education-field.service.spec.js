"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var get_education_field_service_1 = require("./get-education-field.service");
describe('GetEducationFieldService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(get_education_field_service_1.GetEducationFieldService);
        expect(service).toBeTruthy();
    });
});
