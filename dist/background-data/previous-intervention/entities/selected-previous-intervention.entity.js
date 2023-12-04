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
exports.SelectedPreviousInterventionEntity = void 0;
const typeorm_1 = require("typeorm");
const previous_intervention_entity_1 = require("./previous-intervention.entity");
let SelectedPreviousInterventionEntity = class SelectedPreviousInterventionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SelectedPreviousInterventionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SelectedPreviousInterventionEntity.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => previous_intervention_entity_1.PreviousInterventionEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", previous_intervention_entity_1.PreviousInterventionEntity)
], SelectedPreviousInterventionEntity.prototype, "previousIntervention", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SelectedPreviousInterventionEntity.prototype, "other", void 0);
SelectedPreviousInterventionEntity = __decorate([
    (0, typeorm_1.Entity)("selected_previous_intervention")
], SelectedPreviousInterventionEntity);
exports.SelectedPreviousInterventionEntity = SelectedPreviousInterventionEntity;
//# sourceMappingURL=selected-previous-intervention.entity.js.map