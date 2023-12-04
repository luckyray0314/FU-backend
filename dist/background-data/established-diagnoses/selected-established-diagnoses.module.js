"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedEstablishedDiagnosesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const selected_established_diagnoses_entity_1 = require("./entities/selected-established-diagnoses.entity");
const selected_established_diagnoses_service_1 = require("./selected-established-diagnoses.service");
let SelectedEstablishedDiagnosesModule = class SelectedEstablishedDiagnosesModule {
};
SelectedEstablishedDiagnosesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([selected_established_diagnoses_entity_1.SelectedEstablishedDiagnosesEntity])],
        providers: [selected_established_diagnoses_service_1.SelectedEstablishedDiagnosesService],
        exports: [selected_established_diagnoses_service_1.SelectedEstablishedDiagnosesService]
    })
], SelectedEstablishedDiagnosesModule);
exports.SelectedEstablishedDiagnosesModule = SelectedEstablishedDiagnosesModule;
//# sourceMappingURL=selected-established-diagnoses.module.js.map