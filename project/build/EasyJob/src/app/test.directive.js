"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestDirective = /** @class */ (function () {
    function TestDirective(st) {
        this.st = st;
    }
    TestDirective.prototype.onClick = function (el) {
        if (el.id === 'search-input') {
            this.st.searchForm = true;
            console.log('search: ', this.st.searchForm);
        }
        else {
            this.st.searchForm = false;
            console.log('search: ', this.st.searchForm);
        }
    };
    __decorate([
        core_1.HostListener('click', ['$event.target'])
    ], TestDirective.prototype, "onClick", null);
    TestDirective = __decorate([
        core_1.Directive({
            selector: '[appTest]'
        })
    ], TestDirective);
    return TestDirective;
}());
exports.TestDirective = TestDirective;
