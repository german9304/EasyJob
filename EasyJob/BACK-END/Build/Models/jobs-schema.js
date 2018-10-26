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
// import db from "./db-connection";
var cheerio = require("cheerio");
var rp = require("request-promise");
/*
Jobs Schema
*/
var jobsSchema = new mongoose.Schema({
    category: {
        _id: String,
        name: String
    },
    title: String,
    companyName: String,
    location: String,
    description: String
}, { collection: "jobs", versionKey: false });
var categorySchema = new mongoose.Schema({
    category: String
}, { collection: "categories", versionKey: false });
var jobsModel = mongoose.model("jobs", jobsSchema);
var categoryModel = mongoose.model("category", categorySchema);
exports.categoryModel = categoryModel;
var createAJob = function (_a) {
    var category = _a.category, title = _a.title, companyName = _a.companyName, location = _a.location, description = _a.description;
    var _id = category._id, name = category.name;
    return new jobsModel({
        category: {
            _id: _id,
            name: name
        },
        title: title,
        companyName: companyName,
        location: location,
        description: description
    });
};
exports.createAJob = createAJob;
var createAcategory = function (_a) {
    var name = _a.name;
    return new categoryModel({
        name: name
    });
};
exports.createAcategory = createAcategory;
var jobSearch = function (_a) {
    var field = _a.search, location = _a.location;
    return __awaiter(_this, void 0, void 0, function () {
        var url, options, $_1, jobslist_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = "https://www.ziprecruiter.com/candidate/search?search=" + field + "&location=" + location;
                    options = {
                        uri: url,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rp(options)];
                case 2:
                    $_1 = _b.sent();
                    jobslist_1 = [];
                    $_1("#job_list .job_results article").each(function (i, elem) {
                        var job_content = $_1(this).children(".job_content");
                        var title = job_content.find(".just_job_title");
                        // console.log(title.text());
                        var companyName = job_content.find(".t_org_link.name");
                        // console.log(companyName.text());
                        var location = job_content.find(".t_location_link.location");
                        // console.log(location.text());
                        var description = job_content.find(".job_snippet a");
                        // console.log(description.text());
                        var job = {
                            title: title.text(),
                            company: companyName.text(),
                            location: location.text(),
                            description: description.text().trim()
                        };
                        // console.log("res: ", job);
                        jobslist_1.push(job);
                    });
                    return [2 /*return*/, jobslist_1];
                case 3:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.jobSearch = jobSearch;
