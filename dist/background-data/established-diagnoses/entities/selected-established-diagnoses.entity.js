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
exports.SelectedEstablishedDiagnosesEntity = void 0;
const typeorm_1 = require("typeorm");
const established_diagnoses_entity_1 = require("./established-diagnoses.entity");
let SelectedEstablishedDiagnosesEntity = class SelectedEstablishedDiagnosesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SelectedEstablishedDiagnosesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SelectedEstablishedDiagnosesEntity.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => established_diagnoses_entity_1.EstablishedDiagnosesEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", established_diagnoses_entity_1.EstablishedDiagnosesEntity)
], SelectedEstablishedDiagnosesEntity.prototype, "establishedDiagnoses", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SelectedEstablishedDiagnosesEntity.prototype, "other", void 0);
SelectedEstablishedDiagnosesEntity = __decorate([
    (0, typeorm_1.Entity)("selected_established_diagnoses")
], SelectedEstablishedDiagnosesEntity);
exports.SelectedEstablishedDiagnosesEntity = SelectedEstablishedDiagnosesEntity;
//# sourceMappingURL=selected-established-diagnoses.entity.js.map