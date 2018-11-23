"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CategoriesViewComponent = /** @class */ (function () {
    function CategoriesViewComponent() {
        this.clickCategories = new core_1.EventEmitter();
    }
    CategoriesViewComponent.prototype.ngOnInit = function () { };
    CategoriesViewComponent.prototype.onCategoryClick = function (category) {
        this.clickCategories.emit(category);
    };
    __decorate([
        core_1.Input()
    ], CategoriesViewComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Output()
    ], CategoriesViewComponent.prototype, "clickCategories", void 0);
    CategoriesViewComponent = __decorate([
        core_1.Component({
            selector: 'app-categories-view',
            template: "\n    <ul id=\"categories\" [class.active]=\"categories.length > 0\" >\n      <li class=\"item category{{i}}\" *ngFor=\"let category of categories ;  let i= index\">\n        <span class=\"link-category\" (click)=\"onCategoryClick(category.category)\"> {{category.category}}</span>\n      </li>\n    </ul>\n  ",
            styleUrls: [
                '../dashboard-view/dashboard-view.component.scss',
                './categories-view.component.scss'
            ]
        })
    ], CategoriesViewComponent);
    return CategoriesViewComponent;
}());
exports.CategoriesViewComponent = CategoriesViewComponent;
