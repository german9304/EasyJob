"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var user_1 = require("../user");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedin = false;
        this.url = "/login";
        this.userUrl = "/user";
        this.httpOptions = {};
        this.httHeaderpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    AuthService.prototype.authenticate = function (authUser) {
        return this.http
            .post('/auth/create/user', authUser, this.httHeaderpOptions)
            .pipe(operators_1.tap(function (_a) {
            var user = _a.user;
            console.log('create account: ', user);
        }), operators_1.catchError(function (val) {
            return rxjs_1.of("I caught: " + val.status);
        }));
    };
    AuthService.prototype.login = function (authUser) {
        var _this = this;
        return this.http
            .post('/auth/login', authUser, this.httHeaderpOptions)
            .pipe(operators_1.tap(function (_a) {
            var user = _a.user;
            _this.createUserCredentials(user);
        }), operators_1.catchError(function (error) {
            // console.log(`error ${JSON.stringify(error)}`);
            return _this.handleError(error);
        }));
    };
    AuthService.prototype.getUSER = function () {
        return this.http.get(this.userUrl).pipe(operators_1.catchError(function (error) {
            console.log(error.error);
            // return of(error);
            // this.handleError(error);
            return rxjs_1.of(null);
        })
        // tap(user => console.log(`user ${JSON.stringify(user)}`))
        );
    };
    AuthService.prototype.logUser = function () {
        this.isLoggedin = true;
    };
    Object.defineProperty(AuthService.prototype, "HttpHeaders", {
        set: function (_a) {
            var jwt = _a.jwt, httpOptions = _a.httpOptions;
            // console.log(jwt);
            httpOptions.set('', '');
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.createUserCredentials = function (user) {
        try {
            var email = user.email, auth = user.auth, jwt = user.jwt;
            var usr = new user_1.USER('', email, auth, jwt);
            console.log('user: ', usr);
            localStorage.setItem('token', JSON.stringify(user));
            // const httpOpts = {
            //   jwt,
            //   httpOptions: this.httpOptions
            // };
            // this.HttpHeaders(httpOpts);
            return usr;
        }
        catch (error) {
            console.error(error);
        }
    };
    AuthService.prototype.getUserCredentials = function () {
        try {
            // const user = JSON.parse(localStorage.getItem("token"));
            var token = localStorage.getItem('token');
            // console.log("user credentials ", localStorage.getItem("token"));
            if (token) {
                // console.log("token: ", token);
                return JSON.parse(token);
            }
            // console.log("credentials: ", localStorage.getItem("token"));
            return false;
            // return user;
        }
        catch (error) {
            console.error(error);
        }
    };
    AuthService.prototype.clearCredentials = function () {
        localStorage.removeItem('token');
    };
    Object.defineProperty(AuthService.prototype, "UserHeaders", {
        get: function () {
            var credentials = this.getUserCredentials();
            var jwt = credentials.jwt;
            // console.log(credentials);
            // console.log(jwt);
            var httHeaderpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + jwt
                })
            };
            return httHeaderpOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userHeadersFiles", {
        get: function () {
            var credentials = this.getUserCredentials();
            var jwt = credentials.jwt;
            // console.log(credentials);
            // console.log(jwt);
            var httHeaderpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/',
                    Authorization: "Bearer " + jwt
                })
            };
            return httHeaderpOptions;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.handleError = function (error) {
        console.log("error " + error.error + " " + error.status);
        return rxjs_1.throwError(" " + error.error);
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
