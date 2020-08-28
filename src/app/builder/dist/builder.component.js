"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BuilderComponent = void 0;
var core_1 = require("@angular/core");
var character_1 = require("../character");
var BuilderComponent = /** @class */ (function () {
    function BuilderComponent() {
        this.personality = ['Friendly', 'Grouchy',
            'Nerdy', 'Narcissistic'];
        this.career = ['Programmer', 'Professional Gamer', 'Con Artist', 'Fireman'];
        this.model = new character_1.Character('Tyler', this.personality[0], this.career[0]);
        this.submitted = false;
    }
    BuilderComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
    };
    BuilderComponent.prototype.ngOnInit = function () {
    };
    BuilderComponent = __decorate([
        core_1.Component({
            selector: 'app-builder',
            templateUrl: './builder.component.html',
            styleUrls: ['./builder.component.sass']
        })
    ], BuilderComponent);
    return BuilderComponent;
}());
exports.BuilderComponent = BuilderComponent;
