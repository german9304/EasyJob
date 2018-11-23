"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JobSerchListComponent = /** @class */ (function () {
    function JobSerchListComponent(js) {
        this.js = js;
        this.TEST = 'TESTING SPAN';
        this.add = new core_1.EventEmitter();
    }
    JobSerchListComponent.prototype.ngOnInit = function () { };
    JobSerchListComponent.prototype.getWord = function (word) {
        this.js.searchWord(word);
    };
    JobSerchListComponent.prototype.clickAdd = function (job) {
        // console.log(job);
        this.add.emit(job);
    };
    __decorate([
        core_1.Input()
    ], JobSerchListComponent.prototype, "jobs", void 0);
    __decorate([
        core_1.Output()
    ], JobSerchListComponent.prototype, "add", void 0);
    JobSerchListComponent = __decorate([
        core_1.Component({
            selector: 'app-job-serch-list',
            templateUrl: './job-serch-list.component.html',
            styleUrls: ['./job-serch-list.component.scss']
        })
    ], JobSerchListComponent);
    return JobSerchListComponent;
}());
exports.JobSerchListComponent = JobSerchListComponent;
