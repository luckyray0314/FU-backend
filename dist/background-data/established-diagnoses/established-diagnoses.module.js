"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishedDiagnosesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const established_diagnoses_entity_1 = require("./entities/established-diagnoses.entity");
const established_diagnoses_service_1 = require("./established-diagnoses.service");
let EstablishedDiagnosesModule = class EstablishedDiagnosesModule {
};
EstablishedDiagnosesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([established_diagnoses_entity_1.EstablishedDiagnosesEntity])],
        providers: [established_diagnoses_service_1.EstablishedDiagnosesService],
        exports: [established_diagnoses_service_1.EstablishedDiagnosesService]
    })
], EstablishedDiagnosesModule);
exports.EstablishedDiagnosesModule = EstablishedDiagnosesModule;
//# sourceMappingURL=established-diagnoses.module.js.map