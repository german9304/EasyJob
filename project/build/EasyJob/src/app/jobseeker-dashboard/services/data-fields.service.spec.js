"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var data_fields_resolver_service_1 = require("./data-fields.resolver.service");
describe('DataFieldsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [data_fields_resolver_service_1.DataFieldsService]
        });
    });
    it('should be created', testing_1.inject([data_fields_resolver_service_1.DataFieldsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
