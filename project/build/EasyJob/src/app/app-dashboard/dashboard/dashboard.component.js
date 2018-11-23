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
var rxjs_1 = require("rxjs");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, sts, jb, router) {
        this.fb = fb;
        this.sts = sts;
        this.jb = jb;
        this.router = router;
        this.searchForm = this.fb.group({
            category: [''],
            location: ['']
        });
        this.MOCK_LIST = [
            {
                category: 'software'
            },
            {
                category: 'business'
            },
            {
                category: 'education'
            }
        ];
        this.CATEGORIES = [];
        this.clicked = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    DashboardComponent.prototype.getList = function () {
        var _this = this;
        this.searchForm.valueChanges
            .pipe(operators_1.map(function (data) {
            data.category = data.category.toLowerCase();
            return data.category;
        }), operators_1.debounceTime(500), operators_1.distinctUntilChanged(), 
        // tap(data => console.log(data)),
        operators_1.switchMap(function (category) {
            if (!_this.clicked) {
                return _this.jb.searchCategories(category);
            }
            _this.clicked = false;
            return rxjs_1.of([]);
            // return of(category);
        }))
            .subscribe(function (categories) {
            return (_this.CATEGORIES = categories);
        });
    };
    DashboardComponent.prototype.getClickCategory = function (value) {
        if (!value.trim()) {
            return;
        }
        this.Category.setValue(value);
        this.clicked = true;
        this.CATEGORIES = [];
        // console.log("clicked in get click category: ", this.Category.value);
    };
    DashboardComponent.prototype.clickSearch = function () {
        var _a = this.searchForm.value, category = _a.category, location = _a.location;
        // console.log(value);
        this.router.navigate(['/jobs', { search: category, location: location }]);
    };
    Object.defineProperty(DashboardComponent.prototype, "Category", {
        get: function () {
            return this.searchForm.get('category');
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
