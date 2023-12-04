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
exports.SelectedEducationVh2Entity = void 0;
const typeorm_1 = require("typeorm");
const education_vh2_entity_1 = require("./education-vh2.entity");
let SelectedEducationVh2Entity = class SelectedEducationVh2Entity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SelectedEducationVh2Entity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SelectedEducationVh2Entity.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => education_vh2_entity_1.EducationVh2Entity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", education_vh2_entity_1.EducationVh2Entity)
], SelectedEducationVh2Entity.prototype, "educationVh2", void 0);
SelectedEducationVh2Entity = __decorate([
    (0, typeorm_1.Entity)("selected_education_vh2")
], SelectedEducationVh2Entity);
exports.SelectedEducationVh2Entity = SelectedEducationVh2Entity;
//# sourceMappingURL=selected-education-vh2.entity.js.map