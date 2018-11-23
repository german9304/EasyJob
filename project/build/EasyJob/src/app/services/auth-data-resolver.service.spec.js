"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_data_resolver_service_1 = require("./auth-data-resolver.service");
describe('DataResolverService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_data_resolver_service_1.DataResolverService]
        });
    });
    it('should be created', testing_1.inject([auth_data_resolver_service_1.DataResolverService], function (service) {
        expect(service).toBeTruthy();
    }));
});
