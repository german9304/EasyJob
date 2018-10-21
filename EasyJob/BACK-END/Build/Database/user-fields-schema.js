"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
require("./db-connection");
var experienceSchema = new mongoose_1.Schema({
    user: {
        _id: String
    },
    position: String,
    company: String,
    location: String,
    date: { start: String, end: String },
    description: String
}, { collection: "experience", versionKey: false });
exports.experienceSchema = experienceSchema;
var educationSchema = new mongoose_1.Schema({
    user: {
        _id: String
    },
    school: String,
    degree: String,
    majorField: String,
    date: { start: String, end: String },
    description: String
}, { collection: "education", versionKey: false });
exports.educationSchema = educationSchema;
var userEducation = mongoose.model("education", educationSchema);
var userExperience = mongoose.model("experience", experienceSchema);
var createExperience = function (user, fields) { return __awaiter(_this, void 0, void 0, function () {
    var _id, position, company, location, date, description, experience, field, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = user._id;
                position = fields.position, company = fields.company, location = fields.location, date = fields.date, description = fields.description;
                console.log(fields);
                experience = new userExperience({
                    user: {
                        _id: _id
                    },
                    position: position,
                    company: company,
                    location: location,
                    date: date,
                    description: description
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, experience.save()];
            case 2:
                field = _a.sent();
                return [2 /*return*/, field];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createExperience = createExperience;
var editExperience = function (_id, data) { return __awaiter(_this, void 0, void 0, function () {
    var experience, position, company, location_1, date, description, resultExperience, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, userExperience.findById(_id)];
            case 1:
                experience = _a.sent();
                if (!experience) return [3 /*break*/, 3];
                position = data.position, company = data.company, location_1 = data.location, date = data.date, description = data.description;
                console.log("EXPERIENCE BEFORE: " + experience);
                experience.set({
                    position: position,
                    company: company,
                    location: location_1,
                    date: date,
                    description: description
                });
                return [4 /*yield*/, experience.save()];
            case 2:
                resultExperience = _a.sent();
                return [2 /*return*/, resultExperience];
            case 3: return [2 /*return*/, experience];
            case 4:
                err_2 = _a.sent();
                console.log(err_2);
                return [2 /*return*/, err_2];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.editExperience = editExperience;
var deleteExperience = function (_id) { return __awaiter(_this, void 0, void 0, function () {
    var experience;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userExperience.deleteOne({ _id: _id })];
            case 1:
                experience = _a.sent();
                return [2 /*return*/, experience];
        }
    });
}); };
exports.deleteExperience = deleteExperience;
var createEducation = function (user, fields) { return __awaiter(_this, void 0, void 0, function () {
    var _id, school, degree, majorField, date, description, education, field, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = user._id;
                school = fields.school, degree = fields.degree, majorField = fields.majorField, date = fields.date, description = fields.description;
                console.log("before id " + _id + "  " + JSON.stringify(user));
                education = new userEducation({
                    user: {
                        _id: _id
                    },
                    school: school,
                    degree: degree,
                    majorField: majorField,
                    date: date,
                    description: description
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, education.save()];
            case 2:
                field = _a.sent();
                console.log("sucess: " + field);
                return [2 /*return*/, field];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                return [2 /*return*/, err_3];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createEducation = createEducation;
var candidateFields = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var education, experience;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userEducation.find({
                    user: { _id: "" + id }
                })];
            case 1:
                education = _a.sent();
                return [4 /*yield*/, userExperience.find({
                        user: { _id: "" + id }
                    })];
            case 2:
                experience = _a.sent();
                return [2 /*return*/, {
                        education: education,
                        experience: experience
                    }];
        }
    });
}); };
exports.candidateFields = candidateFields;
