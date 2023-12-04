"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedProblemAreaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const selected_problem_area_entity_1 = require("./entities/selected-problem-area.entity");
const selected_problem_area_service_1 = require("./selected-problem-area.service");
let SelectedProblemAreaModule = class SelectedProblemAreaModule {
};
SelectedProblemAreaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([selected_problem_area_entity_1.SelectedProblemAreaEntity])],
        providers: [selected_problem_area_service_1.SelectedProblemAreaService],
        exports: [selected_problem_area_service_1.SelectedProblemAreaService]
    })
], SelectedProblemAreaModule);
exports.SelectedProblemAreaModule = SelectedProblemAreaModule;
//# sourceMappingURL=selected-problem-area.module.js.map