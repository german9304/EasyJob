"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var style_service_service_1 = require("./style-service.service");
describe('StyleServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [style_service_service_1.StyleServiceService]
        });
    });
    it('should be created', testing_1.inject([style_service_service_1.StyleServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
