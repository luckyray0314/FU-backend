"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedEducationVh2Repository = void 0;
const typeorm_1 = require("typeorm");
const selected_education_vh2_entity_1 = require("./entities/selected-education-vh2.entity");
let SelectedEducationVh2Repository = class SelectedEducationVh2Repository extends typeorm_1.Repository {
};
SelectedEducationVh2Repository = __decorate([
    (0, typeorm_1.EntityRepository)(selected_education_vh2_entity_1.SelectedEducationVh2Entity)
], SelectedEducationVh2Repository);
exports.SelectedEducationVh2Repository = SelectedEducationVh2Repository;
//# sourceMappingURL=selected-education-vh2.repository.js.map