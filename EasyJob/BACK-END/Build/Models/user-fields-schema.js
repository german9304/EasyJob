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
// import * as mongoose from "mongoose";
var mongoose_1 = require("mongoose");
var file_schema_1 = require("./file-schema");
var experienceSchema = new mongoose_1.Schema({
    user: {
        _id: String,
    },
    position: String,
    company: String,
    location: String,
    date: { start: String, end: String },
    description: String,
}, { collection: 'experience', versionKey: false });
var educationSchema = new mongoose_1.Schema({
    user: {
        _id: String,
    },
    school: String,
    degree: String,
    majorField: String,
    date: { start: String, end: String },
    description: String,
}, { collection: 'education', versionKey: false });
var userEducation = mongoose_1.model('education', educationSchema);
exports.userEducation = userEducation;
var userExperience = mongoose_1.model('experience', experienceSchema);
exports.userExperience = userExperience;
var experienceModel = function (_a) {
    var user = _a.user, position = _a.position, company = _a.company, location = _a.location, date = _a.date, description = _a.description;
    return new userExperience({
        user: user,
        position: position,
        company: company,
        location: location,
        date: date,
        description: description,
    });
};
exports.experienceModel = experienceModel;
var educationModel = function (_a) {
    var user = _a.user, school = _a.school, degree = _a.degree, majorField = _a.majorField, date = _a.date, description = _a.description;
    return new userEducation({
        user: user,
        school: school,
        degree: degree,
        majorField: majorField,
        date: date,
        description: description,
    });
};
exports.educationModel = educationModel;
var updateEducationField = function (model, _a) {
    var school = _a.school, degree = _a.degree, majorField = _a.majorField, date = _a.date, description = _a.description;
    return model.set({
        school: school,
        degree: degree,
        majorField: majorField,
        date: date,
        description: description,
    });
};
exports.updateEducationField = updateEducationField;
var updateExperienceField = function (model, _a) {
    var position = _a.position, company = _a.company, location = _a.location, date = _a.date, description = _a.description;
    return model.set({
        position: position,
        company: company,
        location: location,
        date: date,
        description: description,
    });
};
exports.updateExperienceField = updateExperienceField;
/*
*  Create field
*
*/
var createCandidateField = function (user, field, model) { return __awaiter(_this, void 0, void 0, function () {
    var _id, newField, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = user._id;
                newField = model(field);
                newField.user = { _id: _id };
                return [4 /*yield*/, newField.save()];
            case 1: 
            // console.log(newField);
            return [2 /*return*/, _a.sent()];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createCandidateField = createCandidateField;
/*
*  Update  field
*
*/
var updateCandidateField = function (id, field, model, updateModel) { return __awaiter(_this, void 0, void 0, function () {
    var findField, updatedField, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, model.findById(id)];
            case 1:
                findField = _a.sent();
                if (!findField) return [3 /*break*/, 3];
                updatedField = updateModel(findField, field);
                return [4 /*yield*/, updatedField.save()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3: return [2 /*return*/, findField];
            case 4:
                err_2 = _a.sent();
                console.error(err_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateCandidateField = updateCandidateField;
/*
*  Error Checking when delete field
*
*/
var err = function (err) {
    if (err)
        console.error(err);
    console.log('successful');
};
/*
*  Delete  field
*
*/
var deleteCandidateField = function (id, model) { return __awaiter(_this, void 0, void 0, function () {
    var findField, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model.findById(id)];
            case 1:
                findField = _a.sent();
                if (findField) {
                    model.deleteOne({ _id: id }, err);
                }
                return [2 /*return*/, findField];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCandidateField = deleteCandidateField;
var candidateFields = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var education, experience, fileInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userEducation.find({
                    user: { _id: "" + id },
                })];
            case 1:
                education = _a.sent();
                return [4 /*yield*/, userExperience.find({
                        user: { _id: "" + id },
                    })];
            case 2:
                experience = _a.sent();
                return [4 /*yield*/, file_schema_1.getCandidateResume(id)];
            case 3:
                fileInfo = _a.sent();
                return [2 /*return*/, {
                        education: education,
                        experience: experience,
                        fileInfo: fileInfo,
                    }];
        }
    });
}); };
exports.candidateFields = candidateFields;
var candidateFieldById = function (id, model) {
    if (id === void 0) { id = ''; }
    return __awaiter(_this, void 0, void 0, function () {
        var field, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, model.findById(id)];
                case 1:
                    field = _a.sent();
                    return [2 /*return*/, field];
                case 2:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.candidateFieldById = candidateFieldById;
var candidateField = function (model) { return __awaiter(_this, void 0, void 0, function () {
    var field, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model.find({})];
            case 1:
                field = _a.sent();
                return [2 /*return*/, field];
            case 2:
                err_5 = _a.sent();
                console.error(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.candidateField = candidateField;
