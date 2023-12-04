"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationVh2Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const education_vh2_repository_1 = require("./education-vh2.repository");
const education_vh2_service_1 = require("./education-vh2.service");
const education_vh2_entity_1 = require("./entities/education-vh2.entity");
const selected_education_vh2_entity_1 = require("./entities/selected-education-vh2.entity");
const selected_education_vh2_repository_1 = require("./selected-education-vh2.repository");
const selected_education_vh2_service_1 = require("./selected-education-vh2.service");
let EducationVh2Module = class EducationVh2Module {
};
EducationVh2Module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([education_vh2_entity_1.EducationVh2Entity, selected_education_vh2_entity_1.SelectedEducationVh2Entity])],
        providers: [education_vh2_service_1.EducationVh2Service, education_vh2_repository_1.EducationVh2Repository, selected_education_vh2_service_1.SelectedEducationVh2Service, selected_education_vh2_repository_1.SelectedEducationVh2Repository],
        exports: [education_vh2_service_1.EducationVh2Service, education_vh2_repository_1.EducationVh2Repository, selected_education_vh2_service_1.SelectedEducationVh2Service, selected_education_vh2_repository_1.SelectedEducationVh2Repository]
    })
], EducationVh2Module);
exports.EducationVh2Module = EducationVh2Module;
//# sourceMappingURL=education-vh2.module.js.map