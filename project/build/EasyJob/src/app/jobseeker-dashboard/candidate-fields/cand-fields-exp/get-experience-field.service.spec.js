"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var get_experience_field_service_1 = require("./get-experience-field.service");
describe('GetExperienceFieldService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [get_experience_field_service_1.GetExperienceFieldService]
        });
    });
    it('should be created', testing_1.inject([get_experience_field_service_1.GetExperienceFieldService], function (service) {
        expect(service).toBeTruthy();
    }));
});
