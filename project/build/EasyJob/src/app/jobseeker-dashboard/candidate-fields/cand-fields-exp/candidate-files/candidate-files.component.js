"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CandidateFilesComponent = /** @class */ (function () {
    function CandidateFilesComponent() {
        this.FAKE_FILE = {
            filename: 'Blank.pdf',
            date: '01/02'
        };
    }
    CandidateFilesComponent.prototype.ngOnInit = function () {
        console.log("originalname: " + this.fileInfo.get('originalName'));
        var fileInfo = this.fileInfo;
        this.originalName = fileInfo.get('originalName');
        this.uploadDate = fileInfo.get('uploadDate');
    };
    __decorate([
        core_1.Input()
    ], CandidateFilesComponent.prototype, "fileInfo", void 0);
    CandidateFilesComponent = __decorate([
        core_1.Component({
            selector: 'app-candidate-files',
            templateUrl: './candidate-files.component.html',
            styleUrls: ['./candidate-files.component.scss']
        })
    ], CandidateFilesComponent);
    return CandidateFilesComponent;
}());
exports.CandidateFilesComponent = CandidateFilesComponent;
