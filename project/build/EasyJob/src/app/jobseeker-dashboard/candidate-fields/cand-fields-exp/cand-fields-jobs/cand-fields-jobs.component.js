"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var immutable_1 = require("immutable");
// import { FILE } from "../.././file";
var CandExpEduResComponent = /** @class */ (function () {
    function CandExpEduResComponent(fields, fsedu, fsexp, router, route, fileService) {
        this.fields = fields;
        this.fsedu = fsedu;
        this.fsexp = fsexp;
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        this.fileUpload = new forms_1.FormControl('');
    }
    CandExpEduResComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.fileService.fileInfo.toObject());
        this.route.data.subscribe(function (data) {
            console.log(data);
            if (data) {
                var _a = data.CandidateFields, experience = _a.experience, education = _a.education, fileInfo = _a.fileInfo;
                // console.log(data);
                _this.fsexp.EXPERIENCE = immutable_1.List(experience);
                // console.log(this.fsexp.FIELD);
                _this.fsedu.EDUCATION = immutable_1.List(education);
                var fInfo = fileInfo;
                console.log("fileinfo: " + fileInfo);
                if (fileInfo) {
                    var originalName = fInfo.originalName, uploadDate = fInfo.uploadDate;
                    var fInfoObj = { originalName: originalName, uploadDate: uploadDate };
                    _this.fileService.fileInfo = immutable_1.Map(fInfoObj);
                    var fi = _this.fileService.fileInfo;
                    // console.log(fi.toObject());
                }
            }
            console.log('ng init');
        });
    };
    CandExpEduResComponent.prototype.trackByExperience = function (index, experience) {
        // console.log(`id: ${experience._id}`);
        return experience._id;
    };
    CandExpEduResComponent.prototype.uploadFile = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var files, file, fileInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = event.target.files;
                        file = files[0];
                        console.log(file);
                        return [4 /*yield*/, this.fileService.uploadResume(file)];
                    case 1:
                        fileInfo = _a.sent();
                        // const { originalName, uploadDate } = fileInfo;
                        this.fileService.fileInfo = immutable_1.Map(fileInfo);
                        console.log(fileInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    CandExpEduResComponent = __decorate([
        core_1.Component({
            selector: 'app-cand-fields-jobs',
            // templateUrl: "./candidate-profile.component.html",
            template: "\n    <div class=\"candidateprofile\">\n      <app-cand-fields-jobs-view\n      [experience]=\"fsexp.EXPERIENCE\"\n      [education]=\"fsedu.EDUCATION\"\n       [trackByExp]=\"trackByExperience\"\n       [file]=\"fileUpload\"\n       (fileChosen)=\"uploadFile($event)\"\n       [fileInfo]=\"fileService.fileInfo\">\n      </app-cand-fields-jobs-view>\n      <router-outlet></router-outlet>\n    </div>\n  ",
            styleUrls: [
                // "../shared-profile-fields.component.scss",
                './cand-fields-jobs.component.css'
            ]
        })
    ], CandExpEduResComponent);
    return CandExpEduResComponent;
}());
exports.CandExpEduResComponent = CandExpEduResComponent;
