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
exports.SelectedTypeOfEffortEntity = void 0;
const typeorm_1 = require("typeorm");
const type_of_effort_entity_1 = require("./type-of-effort.entity");
let SelectedTypeOfEffortEntity = class SelectedTypeOfEffortEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SelectedTypeOfEffortEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SelectedTypeOfEffortEntity.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => type_of_effort_entity_1.TypeOfEffortEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", type_of_effort_entity_1.TypeOfEffortEntity)
], SelectedTypeOfEffortEntity.prototype, "typeOfEffort", void 0);
SelectedTypeOfEffortEntity = __decorate([
    (0, typeorm_1.Entity)("selected_type_of_effort")
], SelectedTypeOfEffortEntity);
exports.SelectedTypeOfEffortEntity = SelectedTypeOfEffortEntity;
//# sourceMappingURL=selected-type-of-effort.entity.js.map