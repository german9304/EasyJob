"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var DataResolverService = /** @class */ (function () {
    function DataResolverService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    DataResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        return this.auth.getUSER().pipe(operators_1.take(1), operators_1.map(function (user) {
            var credentials = _this.auth.getUserCredentials();
            if (user) {
                if (!credentials) {
                    _this.auth.createUserCredentials(user);
                }
                return _this.router.navigate(['/jobseeker']);
            }
            else {
                if (credentials) {
                    _this.auth.clearCredentials();
                }
                return null;
            }
        }));
    };
    DataResolverService = __decorate([
        core_1.Injectable()
    ], DataResolverService);
    return DataResolverService;
}());
exports.DataResolverService = DataResolverService;
