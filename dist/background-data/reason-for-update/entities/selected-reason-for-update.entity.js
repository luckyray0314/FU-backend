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
exports.SelectedReasonForUpdateEntity = void 0;
const typeorm_1 = require("typeorm");
const reason_for_update_entity_1 = require("./reason-for-update.entity");
let SelectedReasonForUpdateEntity = class SelectedReasonForUpdateEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SelectedReasonForUpdateEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SelectedReasonForUpdateEntity.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => reason_for_update_entity_1.ReasonForUpdateEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", reason_for_update_entity_1.ReasonForUpdateEntity)
], SelectedReasonForUpdateEntity.prototype, "reasonForUpdate", void 0);
SelectedReasonForUpdateEntity = __decorate([
    (0, typeorm_1.Entity)("selected_reason_for_update")
], SelectedReasonForUpdateEntity);
exports.SelectedReasonForUpdateEntity = SelectedReasonForUpdateEntity;
//# sourceMappingURL=selected-reason-for-update.entity.js.map