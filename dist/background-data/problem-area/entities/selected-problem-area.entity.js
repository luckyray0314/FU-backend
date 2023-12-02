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
exports.SelectedProblemAreaEntity = void 0;
const typeorm_1 = require("typeorm");
const problem_area_entity_1 = require("./problem-area.entity");
let SelectedProblemAreaEntity = class SelectedProblemAreaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SelectedProblemAreaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SelectedProblemAreaEntity.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => problem_area_entity_1.ProblemAreaEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", problem_area_entity_1.ProblemAreaEntity)
], SelectedProblemAreaEntity.prototype, "problemArea", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SelectedProblemAreaEntity.prototype, "other", void 0);
SelectedProblemAreaEntity = __decorate([
    (0, typeorm_1.Entity)("selected_problem_area")
], SelectedProblemAreaEntity);
exports.SelectedProblemAreaEntity = SelectedProblemAreaEntity;
//# sourceMappingURL=selected-problem-area.entity.js.map