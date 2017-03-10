"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let JumbotronComponent = class JumbotronComponent {
    ngOnInit() {
        this.jbtHeading = 'Hello World';
        this.jbtText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
        this.jbtBtnText = 'Read More';
        this.jbtBtnUrl = 'http://test.com';
    }
};
JumbotronComponent = __decorate([
    core_1.Component({
        selector: "jumbotron",
        moduleId: module.id,
        templateUrl: "./jumbotron.component.html",
    })
], JumbotronComponent);
exports.JumbotronComponent = JumbotronComponent;
//# sourceMappingURL=jumbotron.component.js.map