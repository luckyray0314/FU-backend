"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemAreaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const problem_area_entity_1 = require("./entities/problem-area.entity");
const problem_area_service_1 = require("./problem-area.service");
let ProblemAreaModule = class ProblemAreaModule {
};
ProblemAreaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([problem_area_entity_1.ProblemAreaEntity])],
        providers: [problem_area_service_1.ProblemAreaService],
        exports: [problem_area_service_1.ProblemAreaService]
    })
], ProblemAreaModule);
exports.ProblemAreaModule = ProblemAreaModule;
//# sourceMappingURL=problem-area.module.js.map