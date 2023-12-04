"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentVh2Controller = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const employment_vh2_service_1 = require("./employment-vh2.service");
const employment_vh2_entity_1 = require("./entities/employment-vh2.entity");
let EmploymentVh2Controller = class EmploymentVh2Controller {
    constructor(service) {
        this.service = service;
    }
};
EmploymentVh2Controller = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: employment_vh2_entity_1.EmploymentVh2Entity
        },
        routes: {
            only: ["getManyBase"]
        }
    }),
    (0, common_1.Controller)('employment-vh2'),
    __metadata("design:paramtypes", [employment_vh2_service_1.EmploymentVh2Service])
], EmploymentVh2Controller);
exports.EmploymentVh2Controller = EmploymentVh2Controller;
//# sourceMappingURL=employment-vh2.controller.js.map