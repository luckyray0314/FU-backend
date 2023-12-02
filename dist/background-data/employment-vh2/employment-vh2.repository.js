"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentVh2Repository = void 0;
const typeorm_1 = require("typeorm");
const employment_vh2_entity_1 = require("./entities/employment-vh2.entity");
let EmploymentVh2Repository = class EmploymentVh2Repository extends typeorm_1.Repository {
};
EmploymentVh2Repository = __decorate([
    (0, typeorm_1.EntityRepository)(employment_vh2_entity_1.EmploymentVh2Entity)
], EmploymentVh2Repository);
exports.EmploymentVh2Repository = EmploymentVh2Repository;
//# sourceMappingURL=employment-vh2.repository.js.map