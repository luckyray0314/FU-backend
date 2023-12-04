"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationVh2Repository = void 0;
const typeorm_1 = require("typeorm");
const education_vh2_entity_1 = require("./entities/education-vh2.entity");
let EducationVh2Repository = class EducationVh2Repository extends typeorm_1.Repository {
};
EducationVh2Repository = __decorate([
    (0, typeorm_1.EntityRepository)(education_vh2_entity_1.EducationVh2Entity)
], EducationVh2Repository);
exports.EducationVh2Repository = EducationVh2Repository;
//# sourceMappingURL=education-vh2.repository.js.map