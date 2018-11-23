"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var account_routing_module_1 = require("./account-routing.module");
describe('AccountRoutingModule', function () {
    var accountRoutingModule;
    beforeEach(function () {
        accountRoutingModule = new account_routing_module_1.AccountRoutingModule();
    });
    it('should create an instance', function () {
        expect(accountRoutingModule).toBeTruthy();
    });
});
