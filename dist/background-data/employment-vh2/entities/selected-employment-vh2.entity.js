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
exports.SelectedEmploymentVh2Entity = void 0;
const typeorm_1 = require("typeorm");
const employment_vh2_entity_1 = require("./employment-vh2.entity");
let SelectedEmploymentVh2Entity = class SelectedEmploymentVh2Entity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SelectedEmploymentVh2Entity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SelectedEmploymentVh2Entity.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employment_vh2_entity_1.EmploymentVh2Entity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", employment_vh2_entity_1.EmploymentVh2Entity)
], SelectedEmploymentVh2Entity.prototype, "employmentVh2", void 0);
SelectedEmploymentVh2Entity = __decorate([
    (0, typeorm_1.Entity)("selected_employment_vh2")
], SelectedEmploymentVh2Entity);
exports.SelectedEmploymentVh2Entity = SelectedEmploymentVh2Entity;
//# sourceMappingURL=selected-employment-vh2.entity.js.map